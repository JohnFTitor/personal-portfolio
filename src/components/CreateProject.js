import {
  Box,
  Button,
  Input,
  InputLabel,
} from '@mui/material';
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addProject } from '../redux/projectsReducer';

const CreateProject = ({ user }) => {
  const [project, setProjectData] = useState({
    title: '',
    description: '',
    tags: [
      {
        tag: '',
      },
    ],
    live: '',
    source: '',
    demo: '',
  });
  const [notification, setNotification] = useState({
    open: false,
    message: '',
  });

  const handleChange = (e) => {
    const newProjectData = { ...project };
    newProjectData[e.target.name] = e.target.value;
    setProjectData(newProjectData);
    setNotification({
      open: false,
      message: '',
    });
  };

  const addTag = () => {
    const newProjectData = { ...project };
    newProjectData.tags.push({ tag: '' });
    setProjectData(newProjectData);
    setNotification({
      open: false,
      message: '',
    });
  };

  const removeTag = (index) => {
    const newProjectData = { ...project };
    newProjectData.tags.splice(index, 1);
    setProjectData(newProjectData);
    setNotification({
      open: false,
      message: '',
    });
  };

  const handleTagChange = (e, index) => {
    const newProjectData = { ...project };
    newProjectData.tags[index][e.target.name] = e.target.value;
    setProjectData(newProjectData);
  };

  const desktopImage = useRef(null);
  const mobileImage = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const tags = project.tags.map((instance) => instance.tag);

    formData.append('title', project.title);
    formData.append('description', project.description);
    formData.append('tags', tags);
    formData.append('live', project.live);
    formData.append('source', project.source);
    formData.append('demo', project.demo);
    formData.append('desktop_image', desktopImage.current.firstChild.files[0]);
    formData.append('mobile_image', mobileImage.current.firstChild.files[0]);

    dispatch(addProject({
      body: formData,
      token: user.token,
    }));
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="h-content-screen flex flex-col justify-center items-center gap-8">
      {notification.open && (
        <span>{notification.message}</span>
      )}
      <Input type="text" value={project.title} placeholder="title" name="title" onChange={handleChange} required />
      <textarea placeholder="description" value={project.description} name="description" onChange={handleChange} required />
      <div>
        {project.tags.map((tagField, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            <Input type="text" name="tag" value={tagField.tag} placeholder="tag" onChange={(e) => handleTagChange(e, index)} />
            <Button onClick={() => { removeTag(index); }}> Remove </Button>
          </div>
        ))}
        <Button onClick={addTag}> Add Tag </Button>
      </div>
      <Input type="text" value={project.live} placeholder="live" name="live" onChange={handleChange} required />
      <Input type="text" value={project.source} placeholder="source" name="source" onChange={handleChange} required />
      <Input type="text" value={project.demo} placeholder="demo" name="demo" onChange={handleChange} required />
      <InputLabel htmlFor="desktop_image">
        Desktop Image
        <Input id="desktop_image" ref={desktopImage} type="file" value={project.desktop_image} name="desktop_image" required />
      </InputLabel>
      <InputLabel htmlFor="mobile_image">
        Mobile Image
        <Input id="mobile_image" ref={mobileImage} type="file" value={project.mobile_image} name="mobile_image" required />
      </InputLabel>
      <Button type="submit" variant="contained" className="text-primary-900"> Create Project </Button>
    </Box>
  );
};

CreateProject.propTypes = {
  user: PropTypes.shape({
    token: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
};

export default CreateProject;

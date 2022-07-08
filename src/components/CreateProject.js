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
    <Box component="form" onSubmit={handleSubmit} className="min-h-content-screen flex flex-col justify-center items-center gap-8 p-10">
      {notification.open && (
        <span>{notification.message}</span>
      )}
      <Input type="text" value={project.title} placeholder="Title" name="title" onChange={handleChange} required className="w-2/3 text-lg text-primary-900 dark:text-primary-50" />
      <textarea placeholder="Description" value={project.description} name="description" onChange={handleChange} className="w-2/3 h-128 text-lg border-b-2 border-primary-900 text-primary-900 dark:text-primary-50 bg-white dark:bg-zinc-800" required />
      <div className="flex flex-col items-center w-1/3 gap-5">
        {project.tags.map((tagField, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="w-full text-lg flex gap-5 items-center mx-auto">
            <Input type="text" name="tag" value={tagField.tag} placeholder="Tag" onChange={(e) => handleTagChange(e, index)} className="w-full text-primary-900 dark:text-primary-50" />
            <Button variant="contained" onClick={() => { removeTag(index); }} className="text-red-900 hover:bg-red-900 hover:text-red-50 dark:text-red-50 dark:hover:bg-red-50 dark:hover:text-red-900"> Remove </Button>
          </div>
        ))}
        <Button onClick={addTag} className="text-primary-900 dark:text-primary-50"> Add Tag </Button>
      </div>
      <Input className="w-2/3 text-lg text-primary-900 dark:text-primary-50" type="text" value={project.live} placeholder="Live" name="live" onChange={handleChange} required />
      <Input className="w-2/3 text-lg text-primary-900 dark:text-primary-50" type="text" value={project.source} placeholder="Source" name="source" onChange={handleChange} required />
      <Input className="w-2/3 text-lg text-primary-900 dark:text-primary-50" type="text" value={project.demo} placeholder="Demo" name="demo" onChange={handleChange} required />
      <InputLabel htmlFor="desktop_image" className="w-2/3 text-lg text-primary-900 dark:text-primary-50 flex flex-col items-center">
        Desktop Image
        <Input id="desktop_image" ref={desktopImage} type="file" value={project.desktop_image} name="desktop_image" className="w-full text-primary-900 dark:text-primary-50" required />
      </InputLabel>
      <InputLabel htmlFor="mobile_image" className="w-2/3 text-lg text-primary-900 dark:text-primary-50 flex flex-col items-center">
        Mobile Image
        <Input id="mobile_image" ref={mobileImage} type="file" value={project.mobile_image} name="mobile_image" className="w-full text-primary-900 dark:text-primary-50" required />
      </InputLabel>
      <Button type="submit" variant="contained" className="text-primary-900 hover:bg-primary-900 hover:text-primary-50 dark:bg-zinc-900 dark:text-primary-50 dark:hover:bg-primary-50 dark:hover:text-primary-900"> Create Project </Button>
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

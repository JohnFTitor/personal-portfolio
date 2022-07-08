import {
  Box,
  Button,
  Input,
  InputLabel,
} from '@mui/material';
import React, { useState } from 'react';

const CreateProject = () => {
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

  return (
    <Box type="form">
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
        <Input id="desktop_image" type="file" value={project.desktop_image} name="desktop_image" required />
      </InputLabel>
      <InputLabel htmlFor="mobile_image">
        Mobile Image
        <Input id="mobile_image" type="file" value={project.mobile_image} name="mobile_image" required />
      </InputLabel>
    </Box>
  );
};

export default CreateProject;

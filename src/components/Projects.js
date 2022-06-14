import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Project from './Project';

const Projects = () => {
  const projects = useSelector((state) => state);

  return (
    <Box>
      <h1> Works Section </h1>
      <ul>
        {projects.map((project) => (
          <Project
            key={project.id}
            project={project}
          />
        ))}
      </ul>
    </Box>
  );
};

export default Projects;

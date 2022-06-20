import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Project from './Project';

const Projects = () => {
  const projects = useSelector((state) => state);

  return (
    <Box className="w-full h-full">
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

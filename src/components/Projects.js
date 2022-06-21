import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Project from './Project';

const Projects = () => {
  const projects = useSelector((state) => state);

  return (
    <Box className="w-full h-full overflow-hidden">
      <ul id="projects" className="h-full snap-y snap-mandatory snap-always overflow-y-scroll">
        {projects.map((project) => (
          <Project
            key={project.id}
            project={project}
            aos="fade-in"
          />
        ))}
      </ul>
    </Box>
  );
};

export default Projects;

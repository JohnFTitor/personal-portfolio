import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Project from './Project';

const Projects = () => {
  const { data } = useSelector((state) => state.projects);

  return (
    <Box className="w-full h-full overflow-hidden">
      <ul id="projects" className="h-content-screen snap-y snap-mandatory snap-always overflow-y-scroll">
        {data.map((project, index) => (
          <Project
            key={project.id}
            project={project}
            first={index === 0}
            last={index === (data.length - 1)}
          />
        ))}
      </ul>
    </Box>
  );
};

export default Projects;

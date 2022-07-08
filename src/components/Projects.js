import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Project from './Project';
import { fetchProjects } from '../redux/projectsReducer';

const Projects = () => {
  const { data, status } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'iddle') {
      dispatch(fetchProjects());
    }
  }, []);

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

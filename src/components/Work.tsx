import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import animation from '../assets/gifs/presentation.gif';
import Page from './Page';
import Projects from './Projects';
import { fetchProjects } from '../redux/projectsReducer';

const WorkPage = () => {
  const { status } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'iddle') {
      dispatch(fetchProjects());
    }
  }, []);

  return (
    <Page element={<Projects />} animation={animation} condition={status === 'completed'} />
  );
};

export default WorkPage;

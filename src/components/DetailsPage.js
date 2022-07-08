import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import animation from '../assets/gifs/presentation.gif';
import { fetchProjects } from '../redux/projectsReducer';
import Page from './Page';
import ProjectDetails from './ProjectDetails';

const DetailsPage = () => {
  const { status } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'iddle') {
      dispatch(fetchProjects());
    }
  }, []);

  return (
    <Page element={<ProjectDetails />} animation={animation} condition={status === 'completed'} />
  );
};

export default DetailsPage;

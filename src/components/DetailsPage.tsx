import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import animation from '../assets/gifs/presentation.gif';
import { fetchProjects } from '../redux/projectsReducer';
import Page from './Page';
import ProjectDetails from './ProjectDetails';
import { RootState } from '../redux/store';
import { useAppDispatch } from '../redux/store';

const DetailsPage = () => {
  const { status } = useSelector((state: RootState) => state.projects);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProjects());
    }
  }, []);

  return (
    <Page element={<ProjectDetails />} animation={animation} condition={status === 'completed'} />
  );
};

export default DetailsPage;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Page from './Page';
import animation from '../assets/gifs/presentation.gif';
import DeleteProjectsProtected from './DeleteProjectsProtected';
import { fetchProjects } from '../redux/projectsReducer';

const DeleteProjectsPage = () => {
  const { status } = useSelector((state) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'iddle') {
      dispatch(fetchProjects());
    }
  }, []);

  return (
    <Page element={<DeleteProjectsProtected />} animation={animation} condition={status === 'completed'} />
  );
};

export default DeleteProjectsPage;

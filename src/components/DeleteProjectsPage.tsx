import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Page from './Page';
import animation from '../assets/gifs/presentation.gif';
import DeleteProjectsProtected from './DeleteProjectsProtected';
import { fetchProjects } from '../redux/projectsReducer';
import { RootState } from '../redux/store';
import { useAppDispatch } from '../redux/store';

const DeleteProjectsPage = () => {
  const { status } = useSelector((state: RootState) => state.projects);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProjects());
    }
  }, []);

  return (
    <Page element={<DeleteProjectsProtected />} animation={animation} condition={status === 'completed'} />
  );
};

export default DeleteProjectsPage;

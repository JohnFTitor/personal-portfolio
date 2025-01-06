import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import animation from '../assets/gifs/presentation.gif';
import Page from './Page';
import Projects from './Projects';
import { fetchProjects } from '../redux/projectsReducer';
import { RootState } from '../redux/store';
import { useAppDispatch } from '../redux/store';

const WorkPage = () => {
  const { status } = useSelector((state: RootState) => state.projects);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProjects());
    }
  }, []);

  return (
    <Page element={<Projects />} animation={animation} condition={status === 'completed'} />
  );
};

export default WorkPage;

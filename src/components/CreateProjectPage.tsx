import React from 'react';
import ProtectedRoute from './ProtectedRoute';
import CreateProject from './CreateProject';
import animation from '../assets/gifs/presentation.gif';
import Page from './Page';

const CreateProjectPage = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Page
      animation={animation}
      element={<ProtectedRoute isAllowed={!!user} element={<CreateProject user={user} />} />}
    />
  );
};

export default CreateProjectPage;

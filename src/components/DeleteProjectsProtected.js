import React from 'react';
import ProtectedRoute from './ProtectedRoute';
import DeleteProjects from './DeleteProjects';

const DeleteProjectsProtected = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <ProtectedRoute isAllowed={!!user} element={<DeleteProjects />} />
  );
};

export default DeleteProjectsProtected;

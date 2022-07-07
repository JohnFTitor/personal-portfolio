import React from 'react';
import Page from './Page';
import animation from '../assets/gifs/presentation.gif';
import DeleteProjectsProtected from './DeleteProjectsProtected';

const DeleteProjectsPage = () => (
  <Page element={<DeleteProjectsProtected />} animation={animation} />
);

export default DeleteProjectsPage;

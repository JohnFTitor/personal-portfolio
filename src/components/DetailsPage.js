import React from 'react';
import animation from '../assets/gifs/coding.gif';
import Page from './Page';
import ProjectDetails from './ProjectDetails';

const DetailsPage = () => (
  <Page element={<ProjectDetails />} animation={animation} />
);

export default DetailsPage;

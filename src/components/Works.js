import React from 'react';
import animation from '../assets/gifs/coding.gif';
import Page from './Page';
import Projects from './Projects';

const WorksPage = () => (
  <Page element={<Projects />} animation={animation} />
);

export default WorksPage;

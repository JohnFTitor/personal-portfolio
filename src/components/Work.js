import React from 'react';
import animation from '../assets/gifs/presentation.gif';
import Page from './Page';
import Projects from './Projects';

const WorkPage = () => (
  <Page element={<Projects />} animation={animation} />
);

export default WorkPage;

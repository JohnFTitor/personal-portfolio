import React from 'react';
import animation from '../assets/gifs/presentation.gif';
import About from './About';
import Page from './Page';

const AboutPage = () => (
  <Page element={<About />} animation={animation} />
);

export default AboutPage;

import React from 'react';
import Page from './Page';
import animation from '../assets/gifs/okabeandkurisu.gif';
import Presentation from './Presentation';

const HomePage = () => (
  <Page element={<Presentation />} animation={animation} />
);

export default HomePage;

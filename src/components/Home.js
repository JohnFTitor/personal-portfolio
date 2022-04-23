import React from 'react';
import { Box } from '@mui/material';
import Loading from './Loading';
import animation from '../assets/gifs/okabeandkurisu.gif';

const HomePage = () => (
  <Box className="flex flex-col items-center min-h-screen justify-center">
    <Loading animation={animation} />
  </Box>
);

export default HomePage;

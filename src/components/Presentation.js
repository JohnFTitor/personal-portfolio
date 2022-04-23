import React from 'react';
import { Box } from '@mui/material';
import animation from '../assets/gifs/okabeandkurisu.gif';

const Presentation = () => {
  return (
    <Box className="mt-16 flex flex-col pt-10" >
      <img src={animation} alt="Loading Animation" className="container px-10 animate-slide_up_half" />
    </Box>
  );
};

export default Presentation;

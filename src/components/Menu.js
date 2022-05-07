import React from 'react';
import { Box } from '@mui/material';
import { ReactComponent as Vector1 } from '../assets/svgs/vector1.svg';

const Menu = () => (
  <Box className="absolute top-0 left-0 h-screen w-screen sm:w-72 max-w-xs z-10 bg-secondary-1000 rounded-r-large p-8 flex flex-col items-center">
    <Box className="w-48 h-48 bg-secondary-600 rounded-full" />
    <Vector1 className="absolute bottom-0 left-0 w-full h-fit rounded-br-large" />
  </Box>
);

export default Menu;

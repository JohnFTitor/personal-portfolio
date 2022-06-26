import React from 'react';
import { IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ScrollUpButton = () => {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <IconButton onClick={scrollUp} className="bg-primary-500 dark:bg-primary-50 -rotate-90 p-1">
      <ArrowForwardIosIcon className="text-white dark:text-primary-1000 text-3xl" />
    </IconButton>
  );
};

export default ScrollUpButton;

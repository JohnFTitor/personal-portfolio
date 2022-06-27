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
    <IconButton onClick={scrollUp} className="hover:scale-110 transition-transform bg-primary-500 dark:bg-primary-50 -rotate-90 p-1">
      <ArrowForwardIosIcon className="text-white dark:text-primary-1000 text-3xl xl:text-4xl" />
    </IconButton>
  );
};

export default ScrollUpButton;

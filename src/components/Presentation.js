import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import animation from '../assets/gifs/okabeandkurisu.gif';

const Presentation = () => {
  const [moved, setMoved] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMoved(true);
    }, 1200);
  }, [moved]);

  return (
    <Box className="grid grid-cols-1 grid-rows-auto_1fr pt-14 h-full">
      <img src={animation} alt="Loading Animation" className="container px-5 animate-slide_up_half row-auto mx-auto" />
      {moved ? (
        <Box className="mt-5 p-5 row-span-1 flex flex-col justify-evenly items-center">
          <h1 className="animate-fade text-center font-['Lato'] font-bold text-primary-900 m-2"> Andrés Felipe Arroyave Naranjo </h1>
          <p className="animate-fade text-center font-['Lato'] font-bold text-tertiary-800 text-2xl m-0">
            Frontend developer with a never ending hunger for learning
          </p>
          <Box className="container flex justify-evenly mt-5">
            <IconButton className="bg-tertiary-700 animate-slide_left">
              <GitHubIcon className="text-4xl text-white" />
            </IconButton>
            <IconButton className="bg-primary-700 animate-slide_up">
              <TwitterIcon className="text-4xl text-white" />
            </IconButton>
            <IconButton className="bg-primary-700 animate-slide_right">
              <LinkedInIcon className="text-4xl text-white" />
            </IconButton>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export default Presentation;

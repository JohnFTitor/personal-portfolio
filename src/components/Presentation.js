import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { AiFillMediumCircle } from 'react-icons/ai';
import { SiAngellist } from 'react-icons/si';
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
    <Box className="grid grid-cols-1 grid-rows-auto_1fr pt-4 h-full">
      <img src={animation} alt="Loading Animation" className="container px-5 animate-slide_up_half row-auto mx-auto" />
      {moved ? (
        <Box className="mt-5 p-5 row-span-1 flex flex-col justify-evenly items-center">
          <h1 className="animate-fade text-center font-['Lato'] font-bold text-primary-900 text-3xl m-2"> Andrés Felipe Arroyave Naranjo </h1>
          <p className="animate-fade text-center font-['Lato'] font-bold text-tertiary-800 text-2xl m-0">
            Frontend developer with a never ending hunger for learning
          </p>
          <Box className="container flex justify-evenly mt-5 flex-wrap gap-3">
            <a href="https://github.com/JohnFTitor" target="_blank" rel="noreferrer" className="bg-tertiary-700 animate-slide_up p-2 leading-none rounded-full flex items-center h-fit">
              <GitHubIcon className="text-4xl text-white" />
            </a>
            <a href="https://twitter.com/johnftitor" target="_blank" rel="noreferrer" className="bg-primary-700 animate-slide_left p-2 leading-none rounded-full flex items-center h-fit">
              <TwitterIcon className="text-4xl text-white" />
            </a>
            <a href="https://medium.com/@johnftitor" target="_blank" rel="noreferrer" className="leading-none">
              <AiFillMediumCircle fill="#fff" className="w-14 h-14 bg-red-900 rounded-full p-1 animate-slide_up" />
            </a>
            <a href="https://angel.co/u/johnftitor" target="_blank" rel="noreferrer" className="leading-none">
              <SiAngellist fill="#000" className="w-14 h-14 p-1 animate-slide_right" />
            </a>
            <a href="https://www.linkedin.com/in/andresarroyavenaranjo/" target="_blank" rel="noreferrer" className="bg-primary-700 animate-slide_up p-2 leading-none rounded-full flex items-center h-fit">
              <LinkedInIcon className="text-4xl text-white" />
            </a>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export default Presentation;

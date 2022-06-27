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
    <Box className="grid grid-cols-1 grid-rows-auto_1fr pt-4 min-h-content-screen">
      <img src={animation} alt="Loading Animation" className="container max-w-md xl:max-w-lg 2xl:max-w-2xl px-5 animate-slide_up_half row-auto mx-auto" />
      {moved ? (
        <Box className="mt-5 p-5 md:px-14 md:max-h-64 2xl:max-h-80 row-span-1 flex flex-col justify-evenly items-center md:items-end">
          <h1 className="animate-fade text-center md:text-right 2xl:tracking-wide font-['Lato'] font-medium text-primary-900 dark:text-primary-100 text-3xl md:text-4xl 2xl:text-6xl m-2"> Andrés Felipe Arroyave Naranjo </h1>
          <p className="animate-fade capitalize max-w-xl md:max-w-2xl xl:max-w-4xl 2xl:tracking-wide text-center md:text-right font-['Lato'] font-medium text-tertiary-800 dark:text-white text-2xl 2xl:text-3xl m-0">
            Full-Stack developer with a never ending hunger for learning
          </p>
          <Box className="container max-w-sm flex justify-evenly mt-5 flex-wrap gap-3">
            <a href="https://github.com/JohnFTitor" target="_blank" rel="noreferrer" className="bg-tertiary-700 dark:bg-tertiary-100 animate-slide_up p-2 leading-none rounded-full flex items-center h-fit">
              <GitHubIcon className="text-4xl text-white dark:text-zinc-900" />
            </a>
            <a href="https://twitter.com/johnftitor" target="_blank" rel="noreferrer" className="bg-primary-700 dark:bg-primary-100 animate-slide_left p-2 leading-none rounded-full flex items-center h-fit">
              <TwitterIcon className="text-4xl text-white dark:text-zinc-900" />
            </a>
            <a href="https://medium.com/@johnftitor" target="_blank" rel="noreferrer" className="leading-none">
              <AiFillMediumCircle fill="#fff" className="w-14 h-14 bg-red-900 dark:bg-tertiary-400 rounded-full p-1 animate-slide_up" />
            </a>
            <a href="https://angel.co/u/johnftitor" target="_blank" rel="noreferrer" className="leading-none p-2 bg-zinc-900 rounded-full">
              <SiAngellist fill="#fff" className="w-10 h-10 animate-slide_right" />
            </a>
            <a href="https://www.linkedin.com/in/andresarroyavenaranjo/" target="_blank" rel="noreferrer" className="bg-primary-700 dark:bg-primary-100 animate-slide_up p-2 leading-none rounded-full flex items-center h-fit">
              <LinkedInIcon className="text-4xl text-white dark:text-zinc-900" />
            </a>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export default Presentation;

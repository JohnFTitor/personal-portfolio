import {
  Box,
  Button,
  Input,
} from '@mui/material';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

const Contact = () => {
  const [classes, setClasses] = useState({
    width: 'w-16 xl:w-24',
    display: 'block',
    transform: 'hidden',
  });

  const openForm = () => {
    setClasses({
      width: 'w-0',
      display: 'hidden',
      transform: 'flex',
    });
  };

  const closeForm = () => {
    setClasses({
      width: 'w-16 xl:w-24',
      display: 'block',
      transform: 'hidden',
    });
  };

  const {
    width,
    display,
    transform,
  } = classes;

  return (
    <>
      <button type="button" onClick={openForm} className={`absolute flex bottom-0 right-0 h-16 ${width} xl:h-24 rounded-tl-full transition-all bg-primary-900 dark:bg-primary-100`}>
        <span className={`${display} absolute text-xl xl:text-2xl text-white dark:text-zinc-900 right-2 xl:right-4 bottom-2 xl:bottom-4 hover:scale-110 transition-transform`}> Hey </span>
      </button>
      <Box component="form" className={`absolute right-0 bottom-0 transition-all ${transform} w-60 lg:w-72 h-96 xl:h-128 bg-secondary-50 dark:bg-zinc-900 border-l-2 border-t-2 border-primary-900 dark:border-secondary-50 p-5 flex-col gap-5 overflow-auto`}>
        <div className="flex w-full justify-between items-center">
          <span className="text-xl lg:text-2xl text-primary-900 dark:text-secondary-50">Let&apos;s talk further!</span>
          <button type="button" onClick={closeForm}>
            <CloseIcon className="text-primary-900 dark:text-secondary-50 hover:scale-110 transition-transform" />
          </button>
        </div>
        <Input type="text" placeholder="Enter your name" required className="w-full dark:text-secondary-50" />
        <Input type="email" placeholder="Enter your email" required className="w-full dark:text-secondary-50" />
        <textarea className="w-full h-1/2 text-primary-1000 dark:text-secondary-50 bg-secondary-50 dark:bg-zinc-900" placeholder="Would you like to say something? :)" />
        <Button type="submit" variant="contained" endIcon={<SendIcon />} className="bg-primary-900 dark:bg-primary-50 dark:text-primary-1000 hover:scale-105 transition-transform"> Send </Button>
      </Box>
    </>
  );
};

export default Contact;

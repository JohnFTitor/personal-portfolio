import {
  Box,
  Button,
  Input,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

const Contact = () => {
  const [classes, setClasses] = useState({
    width: 'w-16 xl:w-24',
    display: 'block',
    transform: 'hidden translate-y-full',
  });

  const openForm = () => {
    setClasses({
      width: 'w-0',
      display: 'hidden',
      transform: 'flex translate-y-0',
    });
  };

  const closeForm = () => {
    setClasses({
      width: 'w-16 xl:w-24',
      display: 'block',
      transform: 'hidden translate-y-full',
    });
  };

  const {
    width,
    display,
    transform,
  } = classes;

  return (
    <>
      <button type="button" onClick={openForm} className={`absolute flex bottom-0 right-0 h-16 ${width} xl:h-24 rounded-tl-full transition-all bg-primary-900`}>
        <span className={`${display} absolute text-xl xl:text-2xl text-white right-2 xl:right-4 bottom-2 xl:bottom-4 hover:scale-110 transition-transform`}> Hey </span>
      </button>
      <Box component="form" className={`absolute right-0 bottom-0 transition-all ${transform} w-60 h-96 bg-secondary-50 border-l-2 border-t-2 border-primary-900 p-5 flex-col gap-5`}>
        <div className="flex w-full justify-between items-center">
          <span className="text-xl text-primary-900">Let&apos;s talk further!</span>
          <button type="button" onClick={closeForm}>
            <CloseIcon className="text-primary-900" />
          </button>
        </div>
        <Input type="text" placeholder="Enter your name" className="w-full" />
        <Input type="email" placeholder="Enter your email" required className="w-full" />
        <TextField multiline rows="4" placeholder="Would you like to say something?" className="w-full" />
        <Button variant="contained" endIcon={<SendIcon />} className="bg-primary-900"> Send </Button>
      </Box>
    </>
  );
};

export default Contact;

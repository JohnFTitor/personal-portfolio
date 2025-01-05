import {
  Box,
  Button,
  Input,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

const Contact = () => {
  const [classes, setClasses] = useState({
    width: 'w-16 xl:w-24',
    display: 'block',
    transform: 'hidden',
  });
  const [state, handleSubmit] = useForm('xqknowrz');
  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setNotification(true);
      setFormInfo({
        name: '',
        email: '',
        message: '',
      });
    }
  }, [state.submitting]);

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
    setNotification(false);
  };

  const {
    width,
    display,
    transform,
  } = classes;

  const handleChange = (e) => {
    const newFormInfo = { ...formInfo };
    newFormInfo[e.target.name] = e.target.value;
    setFormInfo(newFormInfo);
    setNotification(false);
  };

  return (
    <>
      <button type="button" onClick={openForm} className={`absolute flex bottom-0 right-0 h-16 ${width} xl:h-24 rounded-tl-full transition-all bg-primary-900 dark:bg-primary-100`}>
        <span className={`${display} absolute text-xl xl:text-2xl text-white dark:text-zinc-900 right-2 xl:right-4 bottom-2 xl:bottom-4 hover:scale-110 transition-transform`}> Hey </span>
      </button>
      <Box component="form" onSubmit={handleSubmit} className={`absolute right-0 bottom-0 transition-all ${transform} w-60 lg:w-72 h-96 xl:h-128 bg-secondary-50 dark:bg-zinc-900 border-l-2 border-t-2 border-primary-900 dark:border-secondary-50 p-5 flex-col gap-5 overflow-auto`}>
        <div className="flex w-full justify-between items-center">
          <span className="text-xl lg:text-2xl text-primary-900 dark:text-secondary-50">
            Let&apos;s talk further!
          </span>
          <button type="button" onClick={closeForm}>
            <CloseIcon className="text-primary-900 dark:text-secondary-50 hover:scale-110 transition-transform" />
          </button>
        </div>
        <span className="text-sm font-medium text-primary-600 dark:text-primary-300">
          {notification && "I received your message. I'll get back to you soon!"}
        </span>
        <Input type="text" onChange={handleChange} value={formInfo.name} name="name" placeholder="Enter your name" required className="w-full dark:text-secondary-50" />
        <Input type="email" onChange={handleChange} value={formInfo.email} name="email" placeholder="Enter your email" required className="w-full dark:text-secondary-50" />
        <textarea name="message" onChange={handleChange} value={formInfo.message} className="w-full h-1/2 text-primary-1000 dark:text-secondary-50 bg-secondary-50 dark:bg-zinc-900" placeholder="Would you like to say something? :)" />
        <Button type="submit" variant="contained" endIcon={<SendIcon />} className="bg-primary-900 dark:bg-primary-50 dark:text-primary-1000 hover:scale-105 transition-transform"> Send </Button>
      </Box>
    </>
  );
};

export default Contact;

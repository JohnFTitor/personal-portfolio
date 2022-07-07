import { Box, Button, Input } from '@mui/material';
import React, { useState } from 'react';
import { loginUser } from '../util/APIHandling';

const Login = () => {
  const [user, setUserData] = useState({
    username: '',
    password: '',
  });
  const [notification, setNotification] = useState({
    open: false,
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser(user);
    if (response.status === 401) {
      setNotification({
        open: true,
        message: response.data.error,
      });
    }
  };

  const handleChange = (e) => {
    const newUserData = { ...user };
    newUserData[e.target.name] = e.target.value;
    setUserData(newUserData);
    setNotification({
      open: false,
      message: '',
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="h-content-screen flex flex-col justify-center items-center gap-10">
      <h1 className="text-primary-900 dark:text-primary-50 text-3xl"> Login </h1>
      {notification.open && (
      <span className="p-5 text-red-900 dark:text-red-100 text-xl">
        { notification.message }
      </span>
      )}
      <Input className="text-xl text-primary-900 dark:text-primary-50" type="text" value={user.username} onChange={handleChange} name="username" placeholder="Username" required />
      <Input className="text-xl text-primary-900 dark:text-primary-50" type="password" value={user.password} onChange={handleChange} name="password" placeholder="Password" required />
      <Button type="submit" variant="contained" className="text-primary-900 dark:text-primary-50"> Login </Button>
    </Box>
  );
};

export default Login;

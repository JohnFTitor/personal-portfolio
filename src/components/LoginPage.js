import React from 'react';
import Page from './Page';
import Login from './Login';
import presentation from '../assets/gifs/presentation.gif';

const LoginPage = () => (
  <Page element={<Login />} animation={presentation} />
);

export default LoginPage;

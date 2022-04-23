import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import animation from '../assets/gifs/okabeandkurisu.gif';

const Presentation = () => {
  const [moved, setMoved] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMoved(true);
    }, 1200);
  }, [moved]);

  return (
    <Box className="mt-16 flex flex-col pt-10 items-center">
      <img src={animation} alt="Loading Animation" className="container px-10 animate-slide_up_half" />
      {moved ? (
        <>
          <h1 className="animate-fade text-center font-['Lato'] font-bold text-primary-900 m-2"> Andrés Felipe Arroyave Naranjo </h1>
          <p className="animate-fade text-center font-['Lato'] font-bold text-tertiary-800 text-2xl m-0">
            Frontend developer with a never ending hunger for learning
          </p>
        </>
      ) : null}
    </Box>
  );
};

export default Presentation;

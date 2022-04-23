import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import animation from '../assets/gifs/okabeandkurisu.gif';
import Presentation from './Presentation';

const HomePage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 4000);
  });

  return (
    <>
      { loaded ? <Presentation /> : <Loading animation={animation} />}
    </>
  );
};

export default HomePage;

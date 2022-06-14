import React, { useState, useEffect } from 'react';
import animation from '../assets/gifs/coding.gif';
import Loading from './Loading';
import Projects from './Projects';

const WorksPage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, [loaded]);

  return (
    <main>
      { loaded ? <Projects /> : <Loading animation={animation} />}
    </main>
  );
};

export default WorksPage;

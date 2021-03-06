import React, { useState, useEffect } from 'react';
import { IconButton, Box } from '@mui/material';
import Menu from './Menu';
import useWindowSize from '../util/useWindowSize';

const Header = () => {
  const [menuActive, setMenu] = useState(false);
  const [translation, setTranslation] = useState('-translate-x-full');
  const [classes, setClasses] = useState({
    color: 'bg-primary-1000 dark:bg-primary-50',
    opacity: 'opacity-100 dark:bg-primary-50',
    rotateUp: null,
    rotateDown: null,
  });

  const screen = useWindowSize();

  const hideMenu = () => {
    setTranslation('-translate-x-full');
    setClasses({
      color: 'bg-primary-1000 dark:bg-primary-50',
      opacity: 'opacity-100 dark:bg-primary-50',
      rotateUp: null,
      rotateDown: null,
    });
    setMenu(false);
  };

  const showMenu = () => {
    setTranslation('translate-x-0');
    setMenu(true);
    setClasses({
      color: 'bg-primary-50 dark:bg-secondary-800',
      opacity: 'opacity-0',
      rotateUp: '-rotate-40',
      rotateDown: 'rotate-40',
    });
  };

  useEffect(() => {
    if (screen.width >= 1024) {
      showMenu();
    } else {
      hideMenu();
    }
  }, [screen]);

  const toggleMenu = () => {
    if (menuActive) {
      hideMenu();
    } else {
      showMenu();
    }
  };

  return (
    <header className="flex sticky top-0 bg-white bg-opacity-90 z-10 h-14 py-2 px-4 w-full items-center justify-between lg:justify-end dark:bg-zinc-900">
      <IconButton onClick={toggleMenu} className="relative lg:hidden z-50 flex flex-col justify-between w-10 h-10 animate-slide_left gap-1">
        <Box className={`${classes.color} h-1 w-8 origin-top-left transition-all ${classes.rotateDown}`} />
        <Box className={`bg-primary-1000 h-1 w-8 transition-all ${classes.opacity}`} />
        <Box className={`${classes.color} h-1 w-8 origin-bottom-left transition-all ${classes.rotateUp}`} />
      </IconButton>
      <Menu translation={translation} toggleMenu={screen.width >= 1024 ? null : toggleMenu} />
    </header>
  );
};

export default Header;

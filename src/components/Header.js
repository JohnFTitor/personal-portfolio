import React, { useState } from 'react';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import { IconButton, Box } from '@mui/material';
import Menu from './Menu';

const Header = () => {
  const [menuActive, setMenu] = useState(false);
  const [translation, setTranslation] = useState('-translate-x-full');
  const [classes, setClasses] = useState({
    color: 'bg-primary-1000 dark:bg-primary-50',
    opacity: 'opacity-100 dark:bg-primary-50',
    rotateUp: null,
    rotateDown: null,
  });

  const toggleMenu = () => {
    if (menuActive) {
      setTranslation('-translate-x-full');
      setClasses({
        color: 'bg-primary-1000 dark:bg-primary-50',
        opacity: 'opacity-100 dark:bg-primary-50',
        rotateUp: null,
        rotateDown: null,
      });
      setMenu(false);
    } else {
      setTranslation('translate-x-0');
      setMenu(true);
      setClasses({
        color: 'bg-primary-50',
        opacity: 'opacity-0',
        rotateUp: '-rotate-40',
        rotateDown: 'rotate-40',
      });
    }
  };

  return (
    <header className="flex sticky top-0 bg-white bg-opacity-90 z-50 h-14 py-2 px-4 w-full justify-between items-center dark:bg-zinc-900">
      <IconButton onClick={toggleMenu} className="relative z-20 flex flex-col justify-between w-10 h-10 animate-slide_left gap-1">
        <Box className={`${classes.color} h-1 w-8 origin-top-left transition-all ${classes.rotateDown}`} />
        <Box className={`bg-primary-1000 h-1 w-8 transition-all ${classes.opacity}`} />
        <Box className={`${classes.color} h-1 w-8 origin-bottom-left transition-all ${classes.rotateUp}`} />
      </IconButton>
      <IconButton className="border-4 border-primary-1000 border-solid h-fit p-0 animate-slide_down dark:border-primary-50">
        <VolumeMuteIcon fontSize="large" className="text-primary-1000 text-4xl dark:text-primary-50" />
      </IconButton>
      <Menu translation={translation} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;

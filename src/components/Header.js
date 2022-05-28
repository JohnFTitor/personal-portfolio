import React, { useState } from 'react';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import { IconButton, Box } from '@mui/material';
import Menu from './Menu';

const Header = () => {
  const [menuActive, setMenu] = useState(false);
  const [animation, setAnimation] = useState('animate-slide_in');
  const [classes, setClasses] = useState({
    color: 'bg-primary-1000',
    opacity: 'opacity-100',
    rotateUp: null,
    rotateDown: null,
  });

  const toggleMenu = () => {
    if (menuActive) {
      setAnimation('animate-slide_out');
      setTimeout(() => { setMenu(false); }, 700);
      setClasses({
        color: 'bg-primary-1000',
        opacity: 'opacity-100',
        rotateUp: null,
        rotateDown: null,
      });
    } else {
      setAnimation('animate-slide_in');
      setMenu(true);
      setClasses({
        color: 'bg-primary-50',
        opacity: 'opacity-0',
        rotateUp: 'rotate-up',
        rotateDown: 'rotate-down',
      });
    }
  };

  return (
    <header className="flex p-2 px-4 w-full justify-between items-center">
      <IconButton onClick={toggleMenu} className="relative z-20 flex flex-col justify-between w-10 h-10 animate-slide_left gap-1">
        <Box className={`${classes.color} h-1 w-8 origin-top-left transition-all ${classes.rotateDown}`} />
        <Box className={`bg-primary-1000 h-1 w-8 transition-all ${classes.opacity}`} />
        <Box className={`${classes.color} h-1 w-8 origin-bottom-left transition-all ${classes.rotateUp}`} />
      </IconButton>
      <IconButton className="border-4 border-primary-1000 border-solid h-fit p-0 animate-slide_down">
        <VolumeMuteIcon fontSize="large" className="text-primary-1000 text-4xl" />
      </IconButton>
      {(menuActive && <Menu animation={animation} />)}
    </header>
  );
};

export default Header;

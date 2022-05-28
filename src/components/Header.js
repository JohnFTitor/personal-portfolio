import React, { useState } from 'react';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import { IconButton, Box } from '@mui/material';
import Menu from './Menu';

const Header = () => {
  const [menuActive, setMenu] = useState(false);
  const [animation, setAnimation] = useState('animate-slide_in');

  const toggleMenu = () => {
    if (menuActive) {
      setAnimation('animate-slide_out');
      setTimeout(() => { setMenu(false); }, 700);
    } else {
      setAnimation('animate-slide_in');
      setMenu(true);
    }
  };

  return (
    <header className="flex p-2 px-4 w-full justify-between items-center">
      <IconButton onClick={toggleMenu} className="relative z-20 animate-slide_left flex flex-col gap-1">
        <Box className="border-solid border-2 border-primary-1000 w-8" />
        <Box className="border-solid border-2 border-primary-1000 w-8" />
        <Box className="border-solid border-2 border-primary-1000 w-8" />
      </IconButton>
      <IconButton className="border-4 border-primary-1000 border-solid h-fit p-0 animate-slide_down">
        <VolumeMuteIcon fontSize="large" className="text-primary-1000 text-4xl" />
      </IconButton>
      {(menuActive && <Menu animation={animation} />)}
    </header>
  );
};

export default Header;

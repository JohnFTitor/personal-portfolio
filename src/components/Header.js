import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import { IconButton } from '@mui/material';

const Header = () => (
  <header className="flex p-1 px-4 fixed top-0 left-0 container justify-between items-center z-10">
    <IconButton className="animate-slide_left">
      <MenuIcon fontSize="large" className="text-primary-1000 text-5xl" />
    </IconButton>
    <IconButton className="border-4 border-primary-1000 border-solid h-fit p-0 animate-slide_down">
      <VolumeMuteIcon fontSize="large" className="text-primary-1000 text-4xl" />
    </IconButton>
  </header>
);

export default Header;

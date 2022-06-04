import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { ReactComponent as Vector1 } from '../assets/svgs/vector1.svg';

const Menu = (props) => {
  const { translation, toggleMenu } = props;

  return (
    <Box className={`absolute top-0 left-0 h-screen w-screen overflow-auto sm:w-72 max-w-xs z-10 bg-secondary-1000 rounded-r-large p-8 flex flex-col items-center transition-transform ${translation}`}>
      <Box className="w-48 h-48 bg-secondary-600 rounded-full" />
      <div className="mt-5 flex flex-col w-full p-5 h-2/3 overflow-auto">
        <Link onClick={toggleMenu} to="/" className="text-secondary-100 text-4xl mt-5"> Home </Link>
        <Link onClick={toggleMenu} to="/works" className="text-secondary-100 text-4xl mt-5"> Works </Link>
        <Link onClick={toggleMenu} to="/about" className="text-secondary-100 text-4xl mt-5"> About </Link>
      </div>
      <Vector1 className="absolute bottom-0 left-0 w-full h-fit rounded-br-large" />
    </Box>
  );
};

Menu.propTypes = {
  translation: PropTypes.string.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default Menu;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { ReactComponent as Vector1 } from '../assets/svgs/vector1.svg';

const Menu = (props) => {
  const { translation, toggleMenu } = props;
  const app = document.querySelector('.app');

  const toggleDarkMode = () => {
    app.classList.toggle('dark');
    localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark';
  };

  return (
    <Box className={`absolute top-0 left-0 h-screen w-screen overflow-auto max-w-72 2xl:max-w-xs z-40 bg-secondary-1000 dark:bg-secondary-100 rounded-r-large p-8 pt-12 flex flex-col items-center transition-transform ${translation}`}>
      <Box onClick={toggleDarkMode} className="w-52 h-52 xl:w-56 xl:h-56 bg-secondary-400 dark:bg-secondary-800 rounded-full cursor-pointer" />
      <div className="mt-5 flex flex-col w-full p-5 overflow-auto font-medium">
        <Link onClick={toggleMenu} to="/" className="text-secondary-100 dark:text-secondary-800 text-4xl 2xl:font-bold mt-5"> Home </Link>
        <Link onClick={toggleMenu} to="/works" className="text-secondary-100 dark:text-secondary-800 text-4xl 2xl:font-bold mt-5"> Works </Link>
        <Link onClick={toggleMenu} to="/about" className="text-secondary-100 dark:text-secondary-800 text-4xl 2xl:font-bold mt-5"> About </Link>
      </div>
      <Vector1 className="absolute bottom-0 left-0 w-full h-fit rounded-br-large" />
    </Box>
  );
};

Menu.defaultProps = {
  toggleMenu: null,
};

Menu.propTypes = {
  translation: PropTypes.string.isRequired,
  toggleMenu: PropTypes.func,
};

export default Menu;

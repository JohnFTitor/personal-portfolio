import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

const Menu = (props) => {
  const { translation, toggleMenu } = props;
  const app = document.querySelector('.app');

  const toggleDarkMode = () => {
    app.classList.toggle('dark');
    localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark';
  };

  return (
    <Box className={`absolute top-0 left-0 h-screen w-screen overflow-auto max-w-72 2xl:max-w-xs z-40 bg-secondary-1000 dark:bg-secondary-100 rounded-r-large p-8 pt-12 flex flex-col items-center transition-transform ${translation}`}>
      <Box onClick={toggleDarkMode} className="w-52 h-52 xl:w-56 xl:h-56 bg-secondary-400 dark:bg-secondary-800 hover:bg-zinc-800 dark:hover:bg-secondary-50 rounded-full cursor-pointer" />
      <div className="relative z-40 mt-5 xl:mt-20 flex flex-col w-full p-5 overflow-auto font-medium gap-5 2xl:gap-8">
        <Link onClick={toggleMenu} to="/" className="text-secondary-100 dark:text-secondary-800 text-4xl 2xl:text-menu 2xl:font-bold"> Home </Link>
        <Link onClick={toggleMenu} to="/works" className="text-secondary-100 dark:text-secondary-800 text-4xl 2xl:text-menu 2xl:font-bold"> Works </Link>
        <Link onClick={toggleMenu} to="/about" className="text-secondary-100 dark:text-secondary-800 text-4xl 2xl:text-menu 2xl:font-bold"> About </Link>
      </div>
      <svg className="absolute bottom-0 left-0 w-full h-fit" viewBox="0 0 280 111" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="fill-tertiary-500 dark:fill-tertiary-700" d="M-0.5 111.5V4L48.1207 25.7299C74.1294 37.3539 103.861 37.3333 129.854 25.673L166.089 9.41802C185.521 0.700905 207.228 -1.5846 228.05 2.8944L282 14.5V111.5H-0.5Z" />
      </svg>
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

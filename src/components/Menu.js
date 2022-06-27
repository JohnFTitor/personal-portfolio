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
      <Box onClick={toggleDarkMode} className="w-52 h-52 xl:w-56 xl:h-56 fill-primary-1000 dark:fill-secondary-50 hover:fill-secondary-50 dark:hover:fill-primary-1000 bg-secondary-400 dark:bg-secondary-800 hover:bg-zinc-800 dark:hover:bg-tertiary-50 rounded-full cursor-pointer flex justify-center items-center">
        <svg className="w-3/4 h-fit fill-inherit" xmlns="http://www.w3.org/2000/svg" zoomAndPan="magnify" viewBox="0 0 375 374.999991" preserveAspectRatio="xMidYMid meet" version="1.0">
          <defs>
            <g />
          </defs>
          <g className="fill-inherit" fill="none" fillOpacity="1">
            <g className="fill-inherit" transform="translate(31.114855, 305.757493)">
              <g className="fill-inherit">
                <path className="fill-inherit" d="M 298.21875 17.515625 C 294.363281 22.304688 289.203125 21.890625 282.734375 16.265625 C 280.648438 4.796875 276.585938 -8.859375 270.546875 -24.703125 C 233.429688 -15.328125 188.910156 -5.21875 136.984375 5.625 C 135.316406 9.382812 132.503906 11.578125 128.546875 12.203125 L 117.59375 -16.578125 C 124.269531 -16.992188 138.035156 -18.140625 158.890625 -20.015625 C 167.429688 -56.085938 176.1875 -97.6875 185.15625 -144.8125 C 193.5 -189.644531 199.441406 -225.925781 202.984375 -253.65625 L 238.328125 -245.515625 C 237.910156 -243.429688 236.765625 -241.554688 234.890625 -239.890625 C 232.804688 -237.804688 229.988281 -236.660156 226.4375 -236.453125 C 219.5625 -204.335938 211.429688 -170.867188 202.046875 -136.046875 C 189.953125 -91.222656 177.960938 -52.753906 166.078125 -20.640625 C 189.640625 -22.722656 223.628906 -26.164062 268.046875 -30.96875 C 259.078125 -52.644531 245.519531 -79.226562 227.375 -110.71875 L 232.390625 -112.59375 C 253.023438 -92.570312 269.390625 -72.660156 281.484375 -52.859375 C 291.492188 -36.390625 297.851562 -21.269531 300.5625 -7.5 C 302.863281 4.382812 302.082031 12.722656 298.21875 17.515625 Z M 76.9375 24.703125 L 76.9375 -114.78125 C 61.09375 -81.84375 40.347656 -53.90625 14.703125 -30.96875 L 10.640625 -35.34375 C 38.367188 -68.914062 58.59375 -110.929688 71.3125 -161.390625 L 15.640625 -161.390625 L 13.453125 -170.453125 L 76.9375 -170.453125 L 76.9375 -223 C 53.789062 -218.207031 33.671875 -214.875 16.578125 -213 L 14.703125 -218.3125 C 34.085938 -222.894531 54.9375 -229.359375 77.25 -237.703125 C 98.519531 -245.628906 115.515625 -253.238281 128.234375 -260.53125 L 153.5625 -238.953125 C 150.644531 -235.828125 145.328125 -235.722656 137.609375 -238.640625 C 125.515625 -234.679688 111.960938 -231.03125 96.953125 -227.6875 L 96.953125 -170.453125 L 120.109375 -170.453125 L 134.796875 -189.21875 C 143.765625 -181.71875 152.628906 -174.109375 161.390625 -166.390625 C 160.554688 -163.054688 157.738281 -161.390625 152.9375 -161.390625 L 96.953125 -161.390625 L 96.953125 -138.5625 C 113.429688 -132.300781 126.359375 -124.894531 135.734375 -116.34375 C 143.453125 -109.257812 148.144531 -102.171875 149.8125 -95.078125 C 151.269531 -88.617188 150.175781 -83.976562 146.53125 -81.15625 C 142.882812 -78.34375 138.453125 -78.707031 133.234375 -82.25 C 130.734375 -89.757812 125.832031 -98.3125 118.53125 -107.90625 C 112.070312 -116.457031 104.878906 -124.484375 96.953125 -131.984375 L 96.953125 17.515625 C 96.953125 18.765625 95.390625 20.222656 92.265625 21.890625 C 88.515625 23.765625 84.445312 24.703125 80.0625 24.703125 Z M 76.9375 24.703125 " />
              </g>
            </g>
          </g>
        </svg>
      </Box>
      <div className="relative z-40 mt-5 xl:mt-20 flex flex-col w-full p-5 overflow-auto font-medium gap-5 2xl:gap-8">
        <Link onClick={toggleMenu} to="/" className="text-secondary-100 dark:text-secondary-800 text-4xl 2xl:text-menu 2xl:font-bold"> Home </Link>
        <Link onClick={toggleMenu} to="/projects" className="text-secondary-100 dark:text-secondary-800 text-4xl 2xl:text-menu 2xl:font-bold"> Projects </Link>
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

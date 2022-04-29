import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CircleIcon from '@mui/icons-material/Circle';
import { Box } from '@mui/material';

const Loading = (props) => {
  const [circles, setCircles] = useState([
    <Box key={0} className="pr-3">
      <CircleIcon className="animate-fade text-primary-800" />
    </Box>,
  ]);
  const { animation } = props;

  const generateCircles = () => {
    const key = circles.length;
    const circle = () => (
      <Box key={key} className="pr-3">
        <CircleIcon className="animate-fade text-primary-800" />
      </Box>
    );
    setCircles(() => [...circles, circle()]);
  };

  useEffect(() => {
    if (circles.length <= 6) {
      setTimeout(generateCircles, 700);
    }
  }, [circles]);

  return (
    <Box className="flex flex-col items-center justify-center h-full">
      <img src={animation} alt="Loading Animation" className="container px-5 animate-slow_fade" />
      <Box className="mt-8 flex justify-center container px-5">
        {circles}
      </Box>
    </Box>
  );
};

Loading.propTypes = {
  animation: PropTypes.string.isRequired,
};

export default Loading;

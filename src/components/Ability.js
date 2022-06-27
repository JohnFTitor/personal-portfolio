import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useWindowSize from '../util/useWindowSize';

const Ability = (props) => {
  const { skill } = props;

  const windowSize = useWindowSize();

  useEffect(() => {
    const elements = document.querySelectorAll('.ability');

    elements.forEach((element) => {
      const learningContainer = element.parentNode;
      const totalWidth = learningContainer.offsetWidth - element.offsetWidth;

      let position = Math.floor(Math.random() * (learningContainer.offsetWidth - 100));
      let pace = 1;

      const move = () => {
        window.requestAnimationFrame(move);
        position += pace;

        if (position >= totalWidth || position <= 0) {
          pace = -pace;
          position += pace;
        }

        // eslint-disable-next-line no-param-reassign
        element.style.left = `${position}px`;
      };

      move();
    });
  }, [windowSize.width]);

  return (
    <li
      className="relative text-primary-500 dark:text-primary-100 left-5 text-lg xl:text-xl 2xl:text-2xl font-medium ability w-fit"
    >
      {skill}
    </li>
  );
};

Ability.propTypes = {
  skill: PropTypes.string.isRequired,
};

export default Ability;

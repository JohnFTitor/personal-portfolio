import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Ability = (props) => {
  const { skill } = props;

  useEffect(() => {
    const learningContainer = document.querySelector('.learning');
    const elements = document.querySelectorAll('.ability');

    elements.forEach((element) => {
      const width = learningContainer.offsetWidth - element.offsetWidth;

      const rect = element.getBoundingClientRect();
      let position = rect.left;
      let pace = 1;

      const move = () => {
        window.requestAnimationFrame(move);
        position += pace;

        if (position >= width) {
          pace = -1;
          position += pace;
        }

        if (position <= 0) {
          pace = 1;
          position += pace;
        }

        // eslint-disable-next-line no-param-reassign
        element.style.left = `${position}px`;
      };

      move();
    });
  }, []);

  return (
    <li
      className="relative text-primary-500 left-5 text-lg font-medium ability w-fit"
    >
      {skill}
    </li>
  );
};

Ability.propTypes = {
  skill: PropTypes.string.isRequired,
};

export default Ability;

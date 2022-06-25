import React from 'react';
import PropTypes from 'prop-types';

const rotation = [
  'rotate-6',
  '-rotate-6',
  'rotate-15',
  '-rotate-15',
  'rotate-10',
  '-rotate-10',
];

const colors = [
  'bg-primary-900',
  'bg-primary-500',
  'bg-tertiary-700',
  'bg-red-900',
];

const getRandomStyles = () => {
  const rotationIndex = Math.floor(Math.random() * rotation.length);
  const colorIndex = Math.floor(Math.random() * colors.length);

  return `${rotation[rotationIndex]} ${colors[colorIndex]}`;
};

const Skill = (props) => {
  const { skill } = props;

  return (
    <li className={`w-fit text-white font-medium rounded-xl origin-center box-border p-1 px-5 m-3 ${getRandomStyles()}`}>{skill}</li>
  );
};

Skill.propTypes = {
  skill: PropTypes.string.isRequired,
};

export default Skill;

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
  'bg-primary-900 dark:bg-primary-100',
  'bg-primary-500 dark:bg-primary-300',
  'bg-tertiary-700 dark:bg-tertiary-100',
  'bg-red-900 dark:bg-red-100',
];

const getRandomStyles = () => {
  const rotationIndex = Math.floor(Math.random() * rotation.length);
  const colorIndex = Math.floor(Math.random() * colors.length);

  return `${rotation[rotationIndex]} ${colors[colorIndex]}`;
};

const Skill = (props) => {
  const { skill } = props;

  return (
    <li className={`w-fit text-white xl:text-xl 2xl:text-2xl dark:text-zinc-900 font-medium rounded-xl origin-center box-border p-1 px-5 m-3 ${getRandomStyles()}`}>{skill}</li>
  );
};

Skill.propTypes = {
  skill: PropTypes.string.isRequired,
};

export default Skill;

import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const Project = (props) => {
  const { project } = props;

  const {
    title,
    image,
    tags,
    description,
    live,
    source,
  } = project;

  return (
    <Box>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <ul>
        {tags.map((tag) => (
          <li key={tag.id}>{tag.description}</li>
        ))}
      </ul>
      <p>{description}</p>
      <a href={live} target="_blank" rel="noreferrer">
        Live
      </a>
      <a href={source} target="_blank" rel="noreferrer">
        Source
      </a>
    </Box>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    description: PropTypes.string.isRequired,
    live: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;

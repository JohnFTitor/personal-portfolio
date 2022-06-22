import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box, IconButton } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useWindowSize from '../util/useWindowSize';

const Project = (props) => {
  const { project, first, last } = props;

  const {
    id,
    title,
    image,
    tags,
    description,
    live,
    source,
  } = project;

  const size = useWindowSize();
  const parent = document.querySelector('#projects');

  const scrollDown = () => {
    parent.scroll({
      top: parent.scrollTop + size.height,
      behavior: 'smooth',
    });
  };

  const scrollUp = () => {
    parent.scroll({
      top: parent.scrollTop - size.height,
      behavior: 'smooth',
    });
  };

  return (
    <li className="flex flex-col items-center w-full gap-5 pt-5 pb-8 snap-start h-full overflow-y-scroll animate-slide_in">
      <h2 className="text-3xl text-primary-1000 font-medium capitalize">{title}</h2>
      <Box className="px-3">
        <img className="w-full" src={image} alt={title} />
      </Box>
      <ul className="flex flex-wrap w-full items-center justify-center gap-x-5 gap-y-2 mb-5 px-3">
        {tags.map((tag) => (
          <li key={tag.id} className="text-xl text-primary-1000 font-medium border-solid border-2 border-primary-1000 py-0.5 px-2">{tag.description}</li>
        ))}
      </ul>
      <Box>
        <p className="text-ellipsis overflow-hidden max-h-48 text-xl text-primary-1000 text-center w-full px-3 mb-5">{description}</p>
      </Box>
      <Box className="flex gap-3 max-w-md justify-center flex-wrap mb-6 w-full px-2">
        <a href={live} target="_blank" rel="noreferrer" className="text-white flex-1 bg-primary-1000 flex gap-5 items-center justify-between py-1 px-3 uppercase font-semibold">
          <p className="text-lg">Live</p>
          <WebIcon className="text-3xl text-white" />
        </a>
        <a href={source} target="_blank" rel="noreferrer" className="text-white flex-1 bg-primary-1000 flex gap-5 items-center justify-between py-1 px-3 uppercase font-semibold">
          <p className="text-lg">Source</p>
          <GitHubIcon className="text-3xl text-white" />
        </a>
      </Box>
      <Box className="flex justify-between items-center w-full max-w-sm px-4">
        <Box>
          {(!last) && (
          <IconButton onClick={scrollDown} className="bg-primary-500 rotate-90 p-1 mr-2">
            <ArrowForwardIosIcon className="text-white text-3xl" />
          </IconButton>
          )}
          {!first && (
          <IconButton onClick={scrollUp} className="bg-primary-500 -rotate-90 p-1">
            <ArrowForwardIosIcon className="text-white text-3xl" />
          </IconButton>
          )}
        </Box>
        <Link to={`/works/${id}`} className="text-white bg-primary-1000 flex gap-5 items-center py-1 px-3 uppercase font-semibold text-lg no-underline"> See More </Link>
      </Box>
    </li>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
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
  first: PropTypes.bool.isRequired,
  last: PropTypes.bool.isRequired,
};

export default Project;

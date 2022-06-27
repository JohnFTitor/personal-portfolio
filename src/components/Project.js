import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box, IconButton } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { v4 as uuidv4 } from 'uuid';
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
    <li className="grid project w-full gap-5 lg:gap-4 2xl:gap-7 pt-5 px-2 2xl:px-16 pb-8 snap-start h-full overflow-y-scroll lg:overflow-y-auto animate-slide_in">
      <h2 className="title w-full text-center xl:text-left text-4xl 2xl:text-5xl 2xl:mt-10 text-primary-1000 dark:text-white font-medium capitalize">{title}</h2>
      <Link to={`/works/${id}`} className="image mx-auto px-3 xl:px-1 xl:mt-5 2xl:mt-5 max-w-sm md:max-w-md lg:max-w-xs xl:max-w-none w-full xl:h-full xl:flex flex-col justify-center">
        <img className="w-full" src={image} alt={title} />
      </Link>
      <ul className="tags flex flex-wrap w-full items-center justify-center xl:justify-start gap-x-5 gap-y-2 mb-1 px-3 xl:px-0">
        {tags.map((tag) => (
          <li key={uuidv4()} className="text-xl 2xl:text-2xl text-primary-1000 dark:text-primary-50 font-medium border-solid border-2 border-primary-1000 dark:border-primary-50 py-0.5 px-2 xl:px-5">{tag}</li>
        ))}
      </ul>
      <Box className="description w-full mx-auto max-w-xl lg:max-w-4xl">
        <p className="text-ellipsis overflow-hidden max-h-48 lg:max-h-28 xl:max-h-56 2xl:max-h-72 text-xl 2xl:text-2xl text-primary-1000 dark:text-white text-center xl:text-left w-full px-3 xl:px-0 mb-5 xl:mb-0">{description}</p>
      </Box>
      <Box className="links flex mx-auto xl:mx-0 gap-3 md:gap-20 xl:gap-5 max-w-md md:max-w-2xl xl:max-w-xs 2xl:max-w-md justify-center flex-wrap mb-6 w-full px-2 xl:px-0">
        <a href={live} target="_blank" rel="noreferrer" className="h-fit text-white dark:text-primary-1000 flex-1 bg-primary-1000 dark:bg-primary-50 flex gap-5 items-center justify-between py-1 px-3 2xl:px-5 uppercase font-semibold">
          <p className="text-lg 2xl:text-xl">Live</p>
          <WebIcon className="text-3xl 2xl:text-4xl text-white dark:text-primary-1000" />
        </a>
        <a href={source} target="_blank" rel="noreferrer" className="h-fit text-white dark:text-primary-1000 flex-1 bg-primary-1000 dark:bg-primary-50 flex gap-5 items-center justify-between py-1 px-3 2xl:px-5 uppercase font-semibold">
          <p className="text-lg 2xl:text-xl">Source</p>
          <GitHubIcon className="text-3xl 2xl:text-4xl text-white dark:text-primary-1000" />
        </a>
      </Box>
      <Box className="buttons flex mx-auto justify-between items-center w-full max-w-sm md:max-w-2xl xl:max-w-none px-4 xl:px-0">
        <Box>
          {(!last) && (
          <IconButton onClick={scrollDown} className="bg-primary-500 dark:bg-primary-50 rotate-90 p-1 mr-2">
            <ArrowForwardIosIcon className="text-white dark:text-primary-1000 text-3xl 2xl:text-4xl" />
          </IconButton>
          )}
          {!first && (
          <IconButton onClick={scrollUp} className="bg-primary-500 dark:bg-primary-50 -rotate-90 p-1">
            <ArrowForwardIosIcon className="text-white dark:text-primary-1000 text-3xl 2xl:text-4xl" />
          </IconButton>
          )}
        </Box>
        <Link to={`/works/${id}`} className="xl:hidden text-white dark:text-primary-1000 bg-primary-1000 dark:bg-primary-50 flex gap-5 items-center py-1 px-3 uppercase font-semibold text-lg no-underline"> See More </Link>
      </Box>
    </li>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(String).isRequired,
    description: PropTypes.string.isRequired,
    live: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }).isRequired,
  first: PropTypes.bool.isRequired,
  last: PropTypes.bool.isRequired,
};

export default Project;

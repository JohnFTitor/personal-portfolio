import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import WebIcon from '@mui/icons-material/Web';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ScrollUpButton from './ScrollUpButton';

const ProjectDetails = () => {
  const { projects } = useSelector((state) => state);
  const { id } = useParams();
  const project = projects?.filter((project) => project.id.toString() === id)[0];

  if (!project) {
    return <h1>Not Found</h1>;
  }

  const paragraphs = project.description.split('\n');
  const firstParagraph = paragraphs.shift();

  return (
    <Box className="relative flex flex-col gap-8 items-center pt-5">
      <Box className="relative flex w-full px-5 justify-center items-center">
        <Link className="absolute left-2 animate-slow_fade" to="/works">
          <ArrowForwardIosIcon className="text-primary-500 -rotate-180 text-3xl" />
        </Link>
        <h1 className="text-3xl text-primary-1000 font-medium capitalize animate-slide_right">{project.title}</h1>
      </Box>
      <Box className="px-3">
        <img className="animate-fade" src={project.image} alt={project.title} />
      </Box>
      <p className="text-lg text-primary-1000 w-full px-5 mb-5 animate-slide_left">
        {firstParagraph}
      </p>
      <Box className="px-3">
        <img src={project.mobileImage} alt={project.title} className="animate-slide_up" />
      </Box>
      <Box className="animate-slide_left">
        { (paragraphs.length > 0) && (
          paragraphs.map((paragraph) => (
            <p key={uuidv4()} className="text-lg text-primary-1000 w-full mb-3 px-5">
              {paragraph}
            </p>
          ))
        )}
      </Box>
      <ul className="flex flex-wrap w-full items-center justify-center gap-x-5 gap-y-2 px-3">
        {project.tags.map((tag) => (
          <li key={uuidv4()} className="text-xl text-primary-1000 font-medium border-solid border-2 border-primary-1000 py-0.5 px-2">{tag}</li>
        ))}
      </ul>
      <Box className="w-full px-3">
        <iframe
          src={project.demo}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Box>
      <Box className="flex gap-3 max-w-md justify-center flex-wrap w-full px-2">
        <a href={project.live} target="_blank" rel="noreferrer" className="text-white flex-1 bg-primary-1000 flex gap-5 items-center justify-between py-1 px-3 uppercase font-semibold">
          <p className="text-lg">Live</p>
          <WebIcon className="text-3xl text-white" />
        </a>
        <a href={project.source} target="_blank" rel="noreferrer" className="text-white flex-1 bg-primary-1000 flex gap-5 items-center justify-between py-1 px-3 uppercase font-semibold">
          <p className="text-lg">Source</p>
          <GitHubIcon className="text-3xl text-white" />
        </a>
      </Box>
      <Box className="w-full pb-3 pl-3">
        <ScrollUpButton />
      </Box>
    </Box>
  );
};

export default ProjectDetails;

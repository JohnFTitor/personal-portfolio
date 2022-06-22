import { Box, IconButton } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import WebIcon from '@mui/icons-material/Web';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ProjectDetails = () => {
  const projects = useSelector((state) => state);
  const { id } = useParams();
  const project = projects?.filter((project) => project.id.toString() === id)[0];

  if (!project) {
    return <h1>Not Found</h1>;
  }

  const paragraphs = project.description.split('\n');
  const firstParagraph = paragraphs.shift();

  const parent = document.querySelector('main');

  const scrollUp = () => {
    parent.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box className="relative flex flex-col gap-10 items-center pt-5">
      <h1 className="text-3xl text-primary-1000 font-medium capitalize">{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p className="text-lg text-primary-1000 text-center w-full px-3 mb-5">
        {firstParagraph}
      </p>
      <img src={project.mobileImage} alt={project.title} />
      <Box>
        { (paragraphs.length > 0) && (
          paragraphs.map((paragraph) => (
            <p key={uuidv4()} className="text-lg text-primary-1000 text-center w-full mb-3 px-3">
              {paragraph}
            </p>
          ))
        )}
      </Box>
      <ul className="flex flex-wrap w-full items-center justify-center gap-x-5 gap-y-2 px-3">
        {project.tags.map((tag) => (
          <li key={tag.id} className="text-xl text-primary-1000 font-medium border-solid border-2 border-primary-1000 py-0.5 px-2">{tag.description}</li>
        ))}
      </ul>
      <Box className="w-full px-5">
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
        <IconButton onClick={scrollUp} className="bg-primary-500 -rotate-90 p-1">
          <ArrowForwardIosIcon className="text-white text-3xl" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProjectDetails;

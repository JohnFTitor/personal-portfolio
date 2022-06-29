import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WebIcon from '@mui/icons-material/Web';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ScrollUpButton from './ScrollUpButton';

const ProjectDetails = () => {
  const { data } = useSelector((state) => state.projects);
  const { id } = useParams();
  const project = data?.filter((project) => project.id.toString() === id)[0];

  if (!project) {
    return <h1>Not Found</h1>;
  }

  const paragraphs = project.description.split('\n');
  const firstParagraph = paragraphs.shift();

  useEffect(() => {
    AOS.init({ duration: 500 });
    AOS.refresh();
  }, []);

  return (
    <Box className="relative flex flex-col gap-8 xl:gap-16 items-center pt-5 w-full px-2 2xl:px-10">
      <Box className="relative flex w-full px-5 justify-center items-center">
        <Link className="absolute left-2" data-aos="fade-right" to="/projects">
          <ArrowForwardIosIcon className="hover:scale-125 transition-transform text-primary-500 dark:text-primary-50 -rotate-180 text-3xl" />
        </Link>
        <h1 className="text-3xl xl:text-4xl 2xl:text-5xl text-primary-1000 dark:text-white font-medium capitalize" data-aos="fade-up">{project.title}</h1>
      </Box>
      <Box className="px-3 w-full flex justify-center max-w-2xl xl:max-w-4xl" data-aos="fade-right">
        <img src={project.image} alt={project.title} />
      </Box>
      <Box className="info grid gap-8 w-full">
        <p className="first-paragraph text-lg 2xl:text-xl text-primary-1000 dark:text-white w-full px-5 mb-5" data-aos="fade-up">
          {firstParagraph}
        </p>
        <Box className="mobile-image flex justify-center items-center mx-auto px-3 w-full max-w-2xl xl:max-w-4xl">
          <img data-aos="fade-up" src={project.mobileImage} alt={project.title} className="animate-slide_up" />
        </Box>
        <Box className="extra-paragraphs w-full">
          { (paragraphs.length > 0) && (
            paragraphs.map((paragraph) => (
              <p key={uuidv4()} className="text-lg 2xl:text-xl text-primary-1000 dark:text-white w-full mb-3 px-5" data-aos="fade-up">
                {paragraph}
              </p>
            ))
          )}
        </Box>
      </Box>
      <ul className="flex flex-wrap w-full items-center justify-center gap-x-5 gap-y-2 mb-1 px-3">
        {project.tags.map((tag) => (
          <li key={uuidv4()} className="text-xl 2xl:text-2xl text-primary-1000 dark:text-primary-50 font-medium border-solid border-2 border-primary-1000 dark:border-primary-50 py-0.5 px-2 xl:px-5">{tag}</li>
        ))}
      </ul>
      <Box className="w-full max-w-7xl px-3">
        <iframe
          data-aos="fade-up"
          src={project.demo}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Box>
      <Box className="flex mx-auto xl:mx-0 gap-3 md:gap-20 max-w-md md:max-w-2xl justify-center flex-wrap mb-6 w-full px-2 xl:px-0">
        <a href={project.live} target="_blank" rel="noreferrer" className="hover:scale-105 transition-transform h-fit text-white dark:text-primary-1000 flex-1 bg-primary-1000 dark:bg-primary-50 flex gap-5 items-center justify-between py-1 xl:py-2 px-3 xl:px-5 uppercase font-semibold">
          <p className="text-lg xl:text-2xl">Live</p>
          <WebIcon className="text-3xl xl:text-5xl text-white dark:text-primary-1000" />
        </a>
        <a href={project.source} target="_blank" rel="noreferrer" className="hover:scale-105 transition-transform h-fit text-white dark:text-primary-1000 flex-1 bg-primary-1000 dark:bg-primary-50 flex gap-5 items-center justify-between py-1 xl:py-2 px-3 xl:px-5 uppercase font-semibold">
          <p className="text-lg xl:text-2xl">Source</p>
          <GitHubIcon className="text-3xl xl:text-5xl text-white dark:text-primary-1000" />
        </a>
      </Box>
      <Box className="w-full p-3 md:pb-5 xl:pb-10">
        <ScrollUpButton />
      </Box>
    </Box>
  );
};

export default ProjectDetails;

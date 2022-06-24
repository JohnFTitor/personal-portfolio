/* eslint-disable no-param-reassign */
import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Skill from './Skill';
import animation from '../assets/gifs/learning.gif';

const About = () => {
  const { about } = useSelector((state) => state);

  const {
    profile,
    aboutMe,
    skills,
    learning,
    likes,
    reading,
    writing,
  } = about;

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

        element.style.left = `${position}px`;
      };

      move();
    });
  }, []);

  return (
    <Box className="flex flex-col gap-10 items-center text-primary-1000 pt-5 px-5">
      <h1 className="text-3xl font-medium">About Me</h1>
      <Box className="px-5">
        <img src={profile} alt="profile" />
      </Box>
      <Box className="flex flex-col gap-5">
        {
          aboutMe.split('\n').map((paragraph) => (
            <p key={uuidv4()} className="text-center text-lg">{paragraph}</p>
          ))
        }
      </Box>
      <Box className="w-full skills">
        <h2 className="text-3xl font-medium mb-5 text-primary-900">Skills</h2>
        <ul className="flex flex-wrap w-full justify-around">
          {
            skills.map((skill) => (
              <Skill key={uuidv4()} skill={skill} />
            ))
          }
        </ul>
      </Box>
      <Box className="w-full">
        <h2 className="text-3xl font-medium mb-5 text-primary-900">Learning</h2>
        <ul className="flex flex-col gap-3 learning w-full">
          {
            learning.map((thing) => (
              <li
                key={uuidv4()}
                className="relative text-primary-500 left-5 text-lg font-medium ability w-fit"
              >
                {thing}
              </li>
            ))
          }
        </ul>
        <Box className="px-7 mt-5 w-full flex justify-center">
          <img src={animation} alt="studying animation" />
        </Box>
      </Box>
      <Box className="flex flex-col gap-5">
        {
          likes.split('\n').map((paragraph) => (
            <p key={uuidv4()} className="text-center text-lg">{paragraph}</p>
          ))
        }
      </Box>
      <Box>
        <p>{`Currently Reading: ${reading}`}</p>
      </Box>
      <Box>
        <p>{`Currently Writing: ${writing}`}</p>
      </Box>
    </Box>
  );
};

export default About;

import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Skill from './Skill';

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

  return (
    <Box className="flex flex-col gap-10 items-center text-primary-1000 pt-5 px-5">
      <h1 className="text-3xl font-medium">About Me</h1>
      <Box className="px-5">
        <img src={profile} alt="profile" />
      </Box>
      <Box className="flex flex-col gap-5">
        {
          aboutMe.split('\n').map((paragraph) => (
            <p key={uuidv4()} className="text-center">{paragraph}</p>
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
      <ul className="learning">
        {
          learning.map((thing) => (
            <li key={uuidv4()}>{thing}</li>
          ))
        }
      </ul>
      <Box className="flex flex-col gap-5">
        {
          likes.split('\n').map((paragraph) => (
            <p key={uuidv4()} className="text-center">{paragraph}</p>
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

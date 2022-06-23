import { Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

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
    <Box className="flex flex-col gap-10 items-center text-primary-1000 pt-5">
      <h1 className="text-3xl font-medium">About Me</h1>
      <img src={profile} alt="profile" />
      <p>{aboutMe}</p>
      <ul className="skills">
        {
          skills.map((skill) => (
            <li key={uuidv4()}>{skill}</li>
          ))
        }
      </ul>
      <ul className="learning">
        {
          learning.map((thing) => (
            <li key={uuidv4()}>{thing}</li>
          ))
        }
      </ul>
      <p>{likes}</p>
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

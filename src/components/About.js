import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skill from './Skill';
import animation from '../assets/gifs/learning.gif';
import Ability from './Ability';
import ScrollUpButton from './ScrollUpButton';

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
    AOS.init({ duration: 500 });
    AOS.refresh();
  }, []);

  return (
    <Box className="flex flex-col gap-10 items-center text-primary-1000 pt-5 px-5 pb-5">
      <h1 className="text-3xl font-medium" data-aos="fade-right">About Me</h1>
      <Box className="px-5" data-aos="fade-left">
        <img src={profile} alt="profile" />
      </Box>
      <Box className="flex flex-col gap-5">
        {
          aboutMe.split('\n').map((paragraph) => (
            <p key={uuidv4()} className="text-center text-lg" data-aos="fade-up">{paragraph}</p>
          ))
        }
      </Box>
      <Box className="w-full skills">
        <h2 className="text-3xl font-medium mb-5 text-primary-900" data-aos="fade-right">Skills</h2>
        <ul className="flex flex-wrap w-full justify-around" data-aos="flip-left">
          {
            skills.map((skill) => (
              <Skill key={uuidv4()} skill={skill} />
            ))
          }
        </ul>
      </Box>
      <Box className="w-full">
        <h2 className="text-3xl font-medium mb-5 text-primary-900" data-aos="fade-right">Learning</h2>
        <ul className="flex flex-col gap-3 learning w-full" data-aos="flip-up">
          {
            learning.map((thing) => (
              <Ability key={uuidv4()} skill={thing} />
            ))
          }
        </ul>
        <Box className="px-7 mt-5 w-full flex justify-center" data-aos="fade">
          <img src={animation} alt="studying animation" />
        </Box>
      </Box>
      <Box className="w-full">
        <h2 className="text-3xl font-medium mb-5 text-primary-900" data-aos="fade-right">Likes</h2>
        <Box className="flex flex-col gap-5">
          {
            likes.split('\n').map((paragraph) => (
              <p key={uuidv4()} className="text-center text-lg" data-aos="fade-up">{paragraph}</p>
            ))
          }
        </Box>
      </Box>
      <h2 className="text-3xl font-medium mb-5 text-primary-900 w-full" data-aos="fade-right">Hobbies</h2>
      <Box className="bg-primary-1000 p-7 text-2xl font-medium text-white" data-aos="flip-up">
        <p>{`Currently Reading: ${reading}`}</p>
      </Box>
      <Box className="bg-primary-1000 p-7 text-2xl font-medium text-white mb-10" data-aos="flip-down">
        <p>{`Currently Writing: ${writing}`}</p>
      </Box>
      <Box className="w-full">
        <ScrollUpButton />
      </Box>
    </Box>
  );
};

export default About;

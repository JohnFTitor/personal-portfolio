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
  const { data } = useSelector((state) => state.about);

  const {
    profile,
    aboutMe,
    skills,
    learning,
    likes,
    reading,
    writing,
  } = data;

  useEffect(() => {
    AOS.init({ duration: 500 });
    AOS.refresh();
  }, []);

  return (
    <Box className="flex flex-col gap-10 2xl:gap-16 items-center text-primary-1000 dark:text-white pt-5 px-5 2xl:px-10 pb-5">
      <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-medium" data-aos="fade-right">About Me</h1>
      <Box className="flex flex-col xl:flex-row-reverse items-center w-full gap-10">
        <Box className="flex-1 flex justify-center px-5" data-aos="fade-left">
          <img src={profile} alt="profile" />
        </Box>
        <Box className="flex-1 flex flex-col gap-5">
          {
            aboutMe.split('\n').map((paragraph) => (
              <p key={uuidv4()} className="text-center xl:text-right text-lg 2xl:text-xl 2xl:pl-24" data-aos="fade-up">{paragraph}</p>
            ))
          }
        </Box>
      </Box>
      <Box className="w-full skills">
        <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-medium mb-5 xl:mb-10 2xl:mb-16 text-primary-900 dark:text-primary-50" data-aos="fade-right">Skills</h2>
        <ul className="flex flex-wrap w-full justify-around" data-aos="flip-left">
          {
            skills.map((skill) => (
              <Skill key={uuidv4()} skill={skill} />
            ))
          }
        </ul>
      </Box>
      <Box className="w-full">
        <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-medium mb-5 text-primary-900 dark:text-primary-50" data-aos="fade-right">Learning</h2>
        <ul className="flex flex-col mx-auto gap-3 learning w-full max-w-3xl" data-aos="flip-up">
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
      <Box className="w-full flex flex-col xl:flex-row gap-10">
        <Box className="flex-1 w-full">
          <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-medium mb-5 xl:mb-10 text-primary-900 dark:text-primary-50" data-aos="fade-right">Likes</h2>
          <img src="https://novatorem-johnftitor.vercel.app/api/spotify" alt="spotify music" className="w-full max-w-lg mx-auto mb-5" data-aos="fade" />
          <Box className="flex flex-col gap-3">
            {
              likes.split('\n').map((paragraph) => (
                <p key={uuidv4()} className="text-center xl:text-left text-lg 2xl:text-xl" data-aos="fade-up">{paragraph}</p>
              ))
            }
          </Box>
        </Box>
        <Box className="flex-1 w-full">
          <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-medium mb-10 text-primary-900 dark:text-primary-50 w-full" data-aos="fade-right">Hobbies</h2>
          <Box className="flex flex-col items-center xl:items-start gap-10">
            <Box className="w-full max-w-sm 2xl:max-w-none bg-primary-1000 dark:bg-primary-50 p-7 2xl:p-12 text-2xl 2xl:text-3xl font-medium text-white dark:text-primary-1000" data-aos="flip-up">
              <p>{`Currently Reading: ${reading}`}</p>
            </Box>
            <Box className="w-full max-w-sm 2xl:max-w-none bg-primary-1000 dark:bg-primary-50 p-7 2xl:p-12 text-2xl 2xl:text-3xl font-medium text-white dark:text-primary-1000 mb-10" data-aos="flip-down">
              <p>{`Currently Writing: ${writing}`}</p>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="w-full">
        <ScrollUpButton />
      </Box>
    </Box>
  );
};

export default About;

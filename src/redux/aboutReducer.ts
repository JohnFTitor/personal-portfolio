import { createAction, createReducer } from '@reduxjs/toolkit';
import profile from '../assets/me.jpg';

// Define Initial State

const initialState = {
  data: {
    profile,
    aboutMe: `Hi! I'm Andrés, a Full-stack developer who enjoys learning new skills and facing challenges. When I'm not coding, you can find me trying new things, letting myself be overwhelmed by something interesting, or just playing games (truth be told!).
    I have experience working with people from around the world, building web projects from inception to production, always being the team's motivator, and striving to deliver the best quality projects. I see each challenge I face as a new opportunity to learn and practice a new programming language, a new feature of a framework, or simply the best collaboration techniques.
    Always eager to learn, I've made sure to make the most from each experience. This Portfolio, for example, was built when I was trying a new CSS framework (have you tried to click the logo of the side menu?). No matter the challenge, I'll give my best to create the perfect solution to meet your needs!`,
    skills: ['JavaScript', 'React', 'Redux', 'Git', 'GitHub', 'Ruby on Rails', 'Ruby', 'HTML/CSS', 'SCSS', 'TailwindCSS', 'Unit testing', 'TDD', 'Python', 'Figma', 'SCRUM', 'Leadership'],
    learning: ['Japanese', 'Drawing', 'Algorithms', 'C#', 'NodeJs', 'Unity'],
    likes: `You could say I'm a geek of some sort. I love anime, Japanese culture (check out the loading screen), and reading web novels and books. I'm interested in writing and drawing as hobbies.
    As you can see above, my music interests are diverse, from classical music (Chopin is my personal favorite so far) to English, Spanish, and Japanese rock and pop music.
    My lifetime dream is to combine all my skills into building something unique and amazing!`,
    reading: 'The Art of War',
    writing: 'Patrick Hendless',
  },
  status: 'iddle',
};

// Define action

const getAbout = createAction('GET_ABOUT');

export { getAbout };

// Define Reducer

const aboutReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getAbout, (state) => state);
});

export default aboutReducer;

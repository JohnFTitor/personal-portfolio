import { createAction, createReducer } from '@reduxjs/toolkit';

// Define Initial State

const initialState = {
  data: {
    profile: 'https://i.pinimg.com/originals/c9/c2/0e/c9c20e390ca6205ec4dc8f136be4422a.jpg',
    aboutMe: `Well, starting with names, I'm Andrés, a Full-stack developer who enjoys learning new skills and facing challenges. When I'm not coding, you can find me trying something new, letting myself be overwhelmed by something interesting, or just playing some games (truth be told!).
    I have experience working with people from around the world, building web projects from requirements to production, always keeping motivation up within the team, and being the best version of myself to deliver the most qualified projects. I see each challenge I face as a new opportunity to learn and practice: a new programming language, a new feature of a framework, or simply best collaboration techniques. 
    Always eager to learn, I've made sure to take the most from each experience. This Portfolio, for example, was built when I was trying a new CSS framework (have you tried to click the logo of the side menu?). No matter the challenge, I'll give my best to create the perfect solution to satisfy your needs.
    Do you have an idea you'd like to create? Contact me below, and let's get our hands on it! `,
    skills: ['JavaScript', 'React', 'Redux', 'Git', 'GitHub', 'Ruby on Rails', 'Ruby', 'HTML/CSS', 'SCSS', 'TailwindCSS', 'Unit testing', 'TDD', 'Python', 'Figma', 'SCRUM', 'Leadership'],
    learning: ['Japanese', 'Drawing', 'Algorithms', 'C#', 'NodeJs', 'Unity'],
    likes: `You could say I'm a geek of some sort. I love anime and Japanese culture (you may have noticed by the loading screen), as well as reading web novels and books. I'm interested in writing and drawing as a hobby. 
    As you can see above, my music interests are diverse, from classical music (Chopin is my personal favorite so far), to English, Spanish, and Japanese rock and pop music.
    My lifetime dream is to combine all of these skills into building something amazing! `,
    reading: 'The art of War',
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

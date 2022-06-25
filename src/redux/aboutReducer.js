import { createAction, createReducer } from '@reduxjs/toolkit';

// Define Initial State

const initialState = {
  profile: 'https://i.pinimg.com/originals/c9/c2/0e/c9c20e390ca6205ec4dc8f136be4422a.jpg',
  aboutMe: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros diam, aliquet quis urna at, lobortis malesuada leo. In iaculis et dui semper bibendum. Ut tempor augue vel lacus hendrerit consectetur. Morbi non dui orci. Quisque eu velit massa. Praesent eget urna in ex imperdiet convallis. Curabitur euismod sapien ac
  feugiat tempor. Mauris id est ornare, molestie nunc vel, venenatis leo. Fusce eget accumsan orci, at euismod ex. Phasellus eu ex eu dolor imperdiet pellentesque. Nulla facilisis fringilla erat, et porta quam mollis at.`,
  skills: ['JavaScript', 'React', 'Redux', 'Git', 'GitHub', 'Ruby on Rails', 'Ruby', 'HTML/CSS'],
  learning: ['Japanese', 'Drawing', 'Algorithms', 'C++'],
  likes: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eros diam, aliquet quis urna at, lobortis malesuada leo. In iaculis et dui semper bibendum. Ut tempor augue vel lacus hendrerit consectetur. Morbi non dui orci. Quisque eu velit massa.
  Praesent eget urna in ex imperdiet convallis. Curabitur euismod sapien ac feugiat tempor. Mauris id est ornare, molestie nunc vel, venenatis leo. Fusce eget accumsan orci, at euismod ex. Phasellus eu ex eu dolor imperdiet pellentesque. Nulla facilisis fringilla erat, et porta quam mollis at.`,
  reading: 'The art of War',
  writing: 'Patrick Hendless',
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

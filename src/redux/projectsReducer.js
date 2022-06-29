// Define initial state

import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  status: 'iddle',
};

// Define Action
const getProjects = createAction('GET_PROJECTS');

export { getProjects };

// Define Reducer
const projectsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getProjects, (state) => state);
});

export default projectsReducer;

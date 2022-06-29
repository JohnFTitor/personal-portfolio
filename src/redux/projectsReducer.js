import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import getProjects from '../util/APIHandling';

// Define initial state
const initialState = {
  data: [],
  status: 'iddle',
};

// Define Action
const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async () => {
    const data = await getProjects();
    return data;
  },
);

export { fetchProjects };

// Define Reducer
const projectsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchProjects.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.status = 'completed';
      newState.data = action.payload;
      return newState;
    });
});

export default projectsReducer;

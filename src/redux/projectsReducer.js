import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import { deleteProject, getProjects } from '../util/APIHandling';

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

const removeProject = createAsyncThunk(
  'projects/delete-project',
  async (data) => {
    const response = await deleteProject(data.id, data.token);
    if (response.status === 200) {
      return data.id;
    }
    return null;
  },
);

export { fetchProjects, removeProject };

// Define Reducer
const projectsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchProjects.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.status = 'completed';
      newState.data = action.payload;
      return newState;
    })
    .addCase(removeProject.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.data = state.data.filter((project) => project.id !== action.payload);
      return newState;
    });
});

export default projectsReducer;

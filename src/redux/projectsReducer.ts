import { createReducer, createAsyncThunk } from '@reduxjs/toolkit';
import { createProject, deleteProject, getProjects } from '../util/APIHandling';
import { Status, Project } from './types';
import { AddProjectFormData } from '../util/types';
export interface ProjectsState {
  data: Project[];
  status: Status;
}

export interface AuthenticatedRequest {
  token: string;
}

export interface DeleteProjectBody extends AuthenticatedRequest {
  id: number;
}

export interface AddProjectBody extends AuthenticatedRequest {
  body: AddProjectFormData;
}

// Define initial state
const initialState: ProjectsState = {
  data: [],
  status: 'idle',
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
  async (data: DeleteProjectBody) => {
    const response = await deleteProject(data.id, data.token);
    if (response.status === 200) {
      return data.id;
    }
    return Promise.reject(new Error(JSON.stringify(response.data)));
  },
);

const addProject = createAsyncThunk(
  'projects/add-project',
  async (data: AddProjectBody) => {
    const response = await createProject(data.body, data.token);
    if (response.status === 201) {
      return response.project;
    }
    return Promise.reject(new Error(JSON.stringify(response.project)));
  },
);

export { fetchProjects, removeProject, addProject };

// Define Reducer
const projectsReducer = createReducer<ProjectsState>(initialState, (builder) => {
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
    })
    .addCase(addProject.fulfilled, (state, action) => {
      const newState = { ...state };
      newState.data = [action.payload, ...state.data];
      return newState;
    });
});

export default projectsReducer;

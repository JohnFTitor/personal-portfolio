import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import projectsReducer from './projectsReducer';
import aboutReducer from './aboutReducer';

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    about: aboutReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

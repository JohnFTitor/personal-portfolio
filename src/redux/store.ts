import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import projectsReducer from './projectsReducer';
import aboutReducer from './aboutReducer';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    about: aboutReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store;

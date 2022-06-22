import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import worksReducer from './worksReducer';
import aboutReducer from './aboutReducer';

const store = configureStore({
  reducer: {
    projects: worksReducer,
    about: aboutReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

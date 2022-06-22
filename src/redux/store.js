import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import worksReducer from './worksReducer';

const store = configureStore({
  reducer: worksReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;

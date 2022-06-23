import { combineReducers } from '@reduxjs/toolkit';
import reduceReducers from 'reduce-reducers';

import dogsReducer from '@/views/Dogs/store/dogsSlice';
import hydrateReducer from './hydrateReducer';

const appReducer = combineReducers({
  dogs: dogsReducer,
});

const rootReducer = reduceReducers(
  hydrateReducer,
  appReducer,
);

export default rootReducer;

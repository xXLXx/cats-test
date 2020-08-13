/**
 * App Reducers
 */
import { combineReducers } from 'redux';

import catsReducer from './CatsReducer';
import catBreedsReducer from './CatBreedsReducer';

const reducers = combineReducers({
  cat: catsReducer,
  catBreed: catBreedsReducer
});

export default reducers;
/**
 * Root Sagas
 */
import { all } from 'redux-saga/effects';

import catsSagas from './Cats';
import catBreedsSagas from './CatBreeds';

export default function* rootSaga(getState) {
  yield all([
    catsSagas(),
    catBreedsSagas()
  ]);
}
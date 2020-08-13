/**
 * Cat Sagas
 */
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

// api
import api from 'Api';

import {
  GET_CAT_BREEDS
} from 'Actions/types';

import {
  getCatBreedsSuccess,
  getCatBreedsFailure
} from 'Actions'

/**
 * Send Cat Breeds Request To Server
 */
const getCatBreedsRequest = async () =>
  await api.get('breeds')
    .then(response => response)
    .catch(error => error);

/**
 * Get Cat Breeds From Server
 */
function* getCatBreedsFromServer() {
  try {
    const response = yield call(getCatBreedsRequest);
    yield put(getCatBreedsSuccess(response));
  } catch (error) {
    yield put(getCatBreedsFailure(error));
  }
}


/**
 * Ger Cat Breeds
 */
export function* getCatBreeds() {
  yield takeEvery(GET_CAT_BREEDS, getCatBreedsFromServer);
}

/**
 * Cat Breeds Root Saga
 */
export default function* rootSaga() {
  yield all([
    fork(getCatBreeds)
  ]);
}

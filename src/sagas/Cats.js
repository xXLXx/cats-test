/**
 * Cat Sagas
 */
import { all, call, fork, put, takeEvery, select } from 'redux-saga/effects';

// api
import api from 'Api';

import {
  GET_CATS,
  SET_SELECTED_CAT
} from 'Actions/types';

import {
  getCatsSuccess,
  getCatsFailure,
  setSelectedCatSuccess,
  setSelectedCatFailure,
  hideLoadingIndicatorAction
} from 'Actions';

import {
  getCatsQueryArgs
} from 'Selectors';

/**
 * Send Cats Request To Server
 */
const getCatsRequest = async (page, limit, breedId) =>
  await api.get(`images/search?page=${page}&limit=${limit}&breed_id=${breedId}`)
    .then(response => response)
    .catch(error => error);

/**
 * Send Get Cat Request To Server
 */
const getCatByIdRequest = async (catId) =>
  await api.get(`images/${catId}`)
    .then(response => response)
    .catch(error => error);

/**
 * Get Cats From Server
 */
function* getCatsFromServer({ payload }) {
  const { limit } = payload;
  const { breedId, page } = yield select(getCatsQueryArgs);

  // Empty breed Id will not continue the searching
  if (breedId) {
    try {
      const response = yield call(getCatsRequest, page, limit, breedId);
      yield put(getCatsSuccess(response));
    } catch (error) {
      yield put(getCatsFailure(error));
    }
  } else {
    yield put(hideLoadingIndicatorAction());
  }
}

/**
 * Get Cat From Server
 */
function* getCatByIdFromServer({ payload }) {
  try {
    const response = yield call(getCatByIdRequest, payload);
    yield put(setSelectedCatSuccess(response));
  } catch (error) {
    yield put(setSelectedCatFailure(error));
  }
}

/**
 * Get Cats
 */
export function* getCats() {
  yield takeEvery(GET_CATS, getCatsFromServer);
}

/**
 * Get Cat
 */
export function* getCatById() {
  yield takeEvery(SET_SELECTED_CAT, getCatByIdFromServer);
}

/**
 * Cats Root Saga
 */
export default function* rootSaga() {
  yield all([
    fork(getCats),
    fork(getCatById)
  ]);
}

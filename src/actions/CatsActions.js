/**
 * Cat Actions 
 */
import {
  GET_CATS,
  GET_CATS_SUCCESS,
  GET_CATS_FAILURE,
  SET_CATS_FILTER,
  SET_SELECTED_CAT,
  SET_SELECTED_CAT_SUCCESS,
  SET_SELECTED_CAT_FAILURE,
  ON_HIDE_LOADER,
  ON_BACK_TO_CATS
} from './types';

/**
 * Redux Action Get Cat Breeds
 */
export const getCats = (limit) => ({
  type: GET_CATS,
  payload: { limit }
});

/**
 * Redux Action Get Cats Success
 */
export const getCatsSuccess = (response) => ({
  type: GET_CATS_SUCCESS,
  payload: response.data
});

/**
 * Redux Action Get Cats Failure
 */
export const getCatsFailure = (error) => ({
  type: GET_CATS_FAILURE,
  payload: error
});

/**
 * Redux Action Set current filters for the cast list
 */
export const setCatsFilter = (filters) => ({
  type: SET_CATS_FILTER,
  payload: filters
});

/**
 * Redux Action Set selected cat by Id
 */
export const setSelectedCat = (id) => ({
  type: SET_SELECTED_CAT,
  payload: id
});

/**
 * Redux Action Set Selected Cat Success
 */
export const setSelectedCatSuccess = (response) => ({
  type: SET_SELECTED_CAT_SUCCESS,
  payload: response.data
});

/**
 * Redux Action Set Selected Cat Failure
 */
export const setSelectedCatFailure = (error) => ({
  type: SET_SELECTED_CAT_FAILURE,
  payload: error
});

/**
 * Redux Action Hides the loading incdicator
 */
export const hideLoadingIndicatorAction = () => ({
  type: ON_HIDE_LOADER
});

/**
 * Redux Action To reset state when back is pressed
 */
export const backToTodosAction = () => ({
  type: ON_BACK_TO_CATS
});
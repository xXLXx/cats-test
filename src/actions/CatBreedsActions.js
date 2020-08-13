/**
 * Cat Actions 
 */
import {
  GET_CAT_BREEDS,
  GET_CAT_BREEDS_SUCCESS,
  GET_CAT_BREEDS_FAILURE
} from './types';

/**
 * Redux Action Get Cat Breeds
 */
export const getCatBreeds = () => ({
  type: GET_CAT_BREEDS
});

/**
 * Redux Action Get Cat Breeds Success
 */
export const getCatBreedsSuccess = (response) => ({
  type: GET_CAT_BREEDS_SUCCESS,
  payload: response.data
});

/**
 * Redux Action Get Cat Breeds Failure
 */
export const getCatBreedsFailure = (error) => ({
  type: GET_CAT_BREEDS_FAILURE,
  payload: error
});
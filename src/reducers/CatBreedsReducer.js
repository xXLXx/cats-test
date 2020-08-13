// action types
import {
  GET_CAT_BREEDS,
  GET_CAT_BREEDS_SUCCESS,
  GET_CAT_BREEDS_FAILURE
} from 'Actions/types';

/**
 * initial state
 */
const INIT_STATE = {
  catBreeds: [],
  loading: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case GET_CAT_BREEDS:
      return {
        ...state,
        loading: true
      };

    // get cat breeds
    case GET_CAT_BREEDS_SUCCESS:
      return {
        ...state,
        catBreeds: action.payload || [],
        loading: false
      };

    // get cat breeds failure
    case GET_CAT_BREEDS_FAILURE:
      return {
        ...state,
        catBreeds: [],
        loading: false
      };

    default: return { ...state };
  }
}
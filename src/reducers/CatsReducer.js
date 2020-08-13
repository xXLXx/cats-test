// action types
import {
  GET_CATS,
  GET_CATS_SUCCESS,
  GET_CATS_FAILURE,
  SET_CATS_FILTER,
  SET_SELECTED_CAT,
  SET_SELECTED_CAT_SUCCESS,
  SET_SELECTED_CAT_FAILURE,
  ON_BACK_TO_CATS,
  ON_HIDE_LOADER
} from 'Actions/types';

/**
 * initial state
 */
const INIT_STATE = {
  cats: [],
  catsPage: 0,
  selectedCat: null,
  isLastCat: false,
  breedsFilter: '',
  loading: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case GET_CATS:
      return {
        ...state,
        catsPage: state.catsPage + 1,
        loading: true
      };

    // get cats
    case GET_CATS_SUCCESS:
      // Get rid of duplicates and determine last page from that. Wierd API
      let newCats = action.payload || [];
      newCats = newCats.filter(newCat => !state.cats.find(cat => newCat.id === cat.id));

      return {
        ...state,
        cats: state.cats.concat(newCats),
        isLastCat: !newCats.length,
        loading: false
      };

    // get cats failure
    case GET_CATS_FAILURE:
      return {
        ...state,
        cats: [],
        catsPage: 0,
        isLastCat: true,
        loading: false
      };

    // sets the current selected cat breed, should reset the list
    case SET_CATS_FILTER:
      return {
        ...state,
        cats: [],
        catsPage: 0,
        isLastCat: false,
        breedsFilter: action.payload.breed,
        loading: false
      };

    case SET_SELECTED_CAT:
      return {
        ...state,
        selectedCat: null,
        loading: true
      };

    // sets the current selected cat
    case SET_SELECTED_CAT_SUCCESS:
      return {
        ...state,
        selectedCat: action.payload,
        loading: false
      };

    // sets the current selected cat failure
    case SET_SELECTED_CAT_FAILURE:
      return {
        ...state,
        selectedCat: null,
        loading: false
      };

    // on hide loader
    case ON_HIDE_LOADER:
      return {
        ...state,
        loading: false
      };

    // on back to cats
    case ON_BACK_TO_CATS:
      return {
        ...state,
        selectedCat: null,
        loading: false
      };

    default: return { ...state };
  }
}
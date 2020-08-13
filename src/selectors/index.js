/**
 * Selectors for Saga 
 */
 
export const getCatsQueryArgs = (state) => {
  const { cat } = state;

  return {
    page: cat.catsPage,
    breedId: cat.breedsFilter
  };
};

export const getCats = (state) => {
  const { cat: { cats } } = state;

  return {
    cats
  };
};

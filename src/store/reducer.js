
const initialState = {
  masterMovies: [],
  movies: [],
  details: []
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'SET_MASTER_MOVIES':
      newState.masterMovies = action.value;
      break;

    case 'SET_MOVIES_LIST':
      newState.movies = action.value;
      break;

    case 'SET_MOVIE_DETAIL':
      newState.details = action.value;
      break;
  }
  
  return newState;
};

export default reducer;
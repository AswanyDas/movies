
export const getMovies = (name) => {

    return dispatch => {

        fetch(`http://www.omdbapi.com/?apikey=6fc87060&s=${name}&type=movie&r=json`)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: "SET_MASTER_MOVIES", value: data.Search });
                dispatch({ type: "SET_MOVIES_LIST", value: data.Search })
            })
    };
};

export const getMovieDetails = (id) => {

    return dispatch => {

        fetch(`http://www.omdbapi.com/?apikey=6fc87060&i=${id}&r=json`)
            .then(response => response.json())
            .then(data => {
                dispatch({ type: "SET_MOVIE_DETAIL", value: data });

            })
    };
};
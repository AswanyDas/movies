import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./header.js";
import { getMovies } from "./store/actions";

function MoviesList(props) {

    const [key, setKey] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        props.getMoviesFromAPI('Marvel');
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        if (key) {
            props.getMoviesFromAPI(key);
        }
    }

    const truncate = (input) => input.length > 30 ? `${input.substring(0, 30)}...` : input;

    return (
        <div>
            <Header />
            <form class="w3-container" onSubmit={handleSubmit}>
                <p>
                    <input class="w3-input" type="text" value={key} placeholder="Search Movies" onChange={(e) => setKey(e.target.value)} />
                </p>
            </form>
            <div class="w3-row-padding w3-margin-top">
                {props.movies && props.movies.map(d =>
                    <div class="w3-third" onClick={() => navigate(`/movie/${d.imdbID}`)}>
                        <div class="w3-card">
                            <img src={d.Poster} width="100%" height="400px" />
                            <div class="w3-container">
                                <h4>{truncate(d.Title)}</h4>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        movies: state.movies,
        movieMaster: state.masterMovies
    };
};

const mapDispachToProps = dispatch => {
    return {
        getMoviesFromAPI: (name) => dispatch(getMovies(name)),
        setMasterMovies: (movies) => dispatch({ type: "SET_MASTER_MOVIES", value: movies }),
        setMoviesList: (movies) => dispatch({ type: "SET_MOVIES_LIST", value: movies })
    };
};


export default connect(
    mapStateToProps,
    mapDispachToProps
)(MoviesList);
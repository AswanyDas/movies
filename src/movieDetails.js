import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./header.js";
import { getMovieDetails } from './store/actions';

function MovieDetails(props) {

    let params = useParams();

    useEffect(() => {
        props.getMovieDetailsFromApI(params.id);
    }, []);

    return (
        <div>
            <Header />
            <div class="w3-row-padding w3-margin-top">
                <div class="w3-third">
                    <div class="w3-card">
                        <img src={props.details.Poster} width="100%" />
                        <div class="w3-container">
                            <p>{props.details.Title}</p>
                            <p>{props.details.Year}</p>
                        </div>
                    </div>
                    <div class="w3-panel w3-card">
                        <div class="w3-row">
                            <div class="w3-col s4">
                                <p className="p-center">{props.details.Genre}</p>
                            </div>
                            <div class="w3-col s4">
                                <p className="p-center">{props.details.Runtime}</p>
                            </div>
                            <div class="w3-col s4">
                                <p className="p-center">{props.details.imdbRating}</p>
                            </div>
                        </div>
                        <p>Synopsis</p>
                        <p>{props.details.Plot}</p>
                        <div class="w3-row">
                            <div class="w3-col s4">
                                <p className="p-center">Score</p>
                                <p className="p-center">{props.details.imdbRating}</p>
                            </div>
                            <div class="w3-col s4">
                                <p className="p-center">Reviews</p>
                                <p className="p-center">{props.details.Metascore}</p>
                            </div>
                            <div class="w3-col s4">
                                <p className="p-center">Popularity</p>
                                <p className="p-center">{props.details.Metascore}</p>
                            </div>
                        </div>
                    </div>
                    <div class="w3-panel w3-card">
                        <p>Director:{props.details.Director}</p>
                        <p>Wirter:{props.details.Writer}</p>
                        <p>Actors:{props.details.Actors}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        details: state.details,
    };
};
const mapDispachToProps = dispatch => {
    return {
        getMovieDetailsFromApI: (id) => dispatch((getMovieDetails(id))),
        setDetails: (details) => dispatch({ type: "SET_MOVIE_DETAIL", value: details }),
    };
};

export default connect(
    mapStateToProps,
    mapDispachToProps
)(MovieDetails);

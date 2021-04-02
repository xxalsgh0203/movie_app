import React from "react";
import PropTypes from "prop-types";
import "./App.css";

// state 가 필요하지 않으므로 function 
// state 가 필요 없을 경우에는 class component 가 될 필요가 없다
function Movie({id, year, title, summary, poster}){
    return <div class="movie">
        <img src={poster} alt={title} title={title} />
        <div class="movie__data">
            <h3 class="movie__title">{title}</h3>
            <h5 class="movie__year">{year}</h5>
            <p class="movie__summary">{summary}</p>
        </div>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;
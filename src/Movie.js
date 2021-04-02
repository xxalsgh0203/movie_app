import React from "react";
import PropTypes from "prop-types";
import "./App.css";

// state 가 필요하지 않으므로 function 
// state 가 필요 없을 경우에는 class component 가 될 필요가 없다
function Movie({id, year, title, summary, poster, genres}){
    return <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="genres">
            {genres.map((genre, index) => (
                <li key={index} className="genres__genre">
                {genre}
                </li>
            ))}
            </ul>
            <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;
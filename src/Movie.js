import React from 'react';
import propTypes from "prop-types";

function Movie({ year, title, summary, poster }) {
    return (
        <div class="movie">
            <img src={poster} alt={title} title={title} />
            <div class="movie__data">
                <h3 class="movie__title">{title}</h3>
                <h5 class="movie__year">{year}</h5>
                <p class="movie__summary">{summary}</p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired
}

export default Movie;
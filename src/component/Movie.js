import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Movie = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div key={movie.id} className="movie-card">
        <img src={movie.medium_cover_image} />
        <h2>
          {movie.title} ({movie.year})
        </h2>
        <div className="rating-star"><FontAwesomeIcon icon={faStar} /> {movie.rating} / 10</div>
        {/* <p>{movie.summary}</p>
      <ul>
        {movie.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul> */}
      </div>
    </Link>
  );
};

export default Movie;

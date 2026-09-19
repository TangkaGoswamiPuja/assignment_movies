import React from "react";
import { Link } from "react-router";

function Movie({ movies }) {
  return movies.map((movie) => {
    return (
      <div
        key={movie.id}
        className="card bg-w-100 w-96 shadow-sm"
      >
        <figure>
          <img className="w-full h-full rounded-lg" src={movie.image.medium} alt={movie.name} />
        </figure>

        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl">{movie.name}</h2>

          <div className="flex bg-red-800 rounded-3xl justify-center w-full gap-5">
            <p>⭐{movie.rating.average}</p>
            <p>📅{movie.premiered}</p>
          </div>

          <div className="card-actions justify-end">
            <Link
              to={`/movies/${movie.id}`}
              className="btn btn-secondary"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    );
  });
}

export default Movie;
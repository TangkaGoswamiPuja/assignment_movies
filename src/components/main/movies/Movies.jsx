import React from "react";
import Movie from "../movie/Movie";
import { useLoaderData, useSearchParams } from "react-router";

function Movies() {
  const movies = useLoaderData();
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 gap-2 p-10 sm:grid-cols-2 lg:grid-cols-3">
      <Movie movies={filteredMovies} />
    </div>
  );
}

export default Movies;
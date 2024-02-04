import React from "react";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  return (
    <div className="bg-black">
      <div className="-mt-60 pl-12 relative z-20">
        <MovieList title="Now Playing" movies={movies.nowPlayingMoviews} />
        <MovieList title="Trending" movies={movies.nowPlayingMoviews} />
        <MovieList title="Popular" movies={movies.nowPlayingMoviews} />
        <MovieList title="Upcoming Movies" movies={movies.nowPlayingMoviews} />
        <MovieList title="Horror" movies={movies.nowPlayingMoviews} />
      </div>
    </div>
  );
};

export default SecondaryContainer;

import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggetions = () => {
  const { movieNames, gptMovies } = useSelector((state) => state.gpt);

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-70">
      {movieNames?.map((movie, i) => (
        <MovieList key={movie} title={movie} movies={gptMovies[i]} />
      ))}
    </div>
  );
};

export default GptMovieSuggetions;

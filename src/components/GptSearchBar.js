import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector, useDispatch } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchRef = useRef(null);
  const langKey = useSelector((state) => state.config.lang);

  const searchMovieTMDB = async (movie) => {
    console.log("movie", movie);
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("json check", json);
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log("handleGptSearchClick", searchRef.current.value);

    const gptQuery =
      "Act as movie recommendatnion and suggest movie for query:" +
      searchRef.current.value +
      "only give me name of five movies, comma seperated like Gaddar, Sholay";
    const getResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log("getResults", getResults);
    const movieResults = getResults.choices[0].message.content.split(",");
    console.log("movieResults", movieResults);
    // ["Tamasha", 'Gadar 2', 'War', 'Welcome'];
    const allPromises = movieResults.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(allPromises);
    dispatch(
      addGptMovieResult({ movieNames: movieResults, movieRes: tmdbResults })
    );
    console.log("tmdbResults", tmdbResults);
  };
  return (
    <div className="pt-[40%]  md:pt-[5%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchRef}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].getSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

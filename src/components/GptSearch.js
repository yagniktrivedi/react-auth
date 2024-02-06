import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggetions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-center md:w-screen"
          src={BG_URL}
          alt="bgImage"
        />
      </div>

      <div className="">
        <GptSearchBar />
        <GptMovieSuggetions />
      </div>
    </>
  );
};

export default GptSearch;

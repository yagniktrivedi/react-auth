import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    gptMovies: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieRes } = action.payload;
      state.movieNames = movieNames;
      state.gptMovies = movieRes;
    },
  },
});

export default gptSlice.reducer;
export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;

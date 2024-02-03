import { configureStore } from "@reduxjs/toolkit";
import userReducder from "./userSlice";
import moviesReducer from "./movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducder,
    movies: moviesReducer,
  },
});

export default appStore;

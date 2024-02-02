import { configureStore } from "@reduxjs/toolkit";
import userReducder from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducder,
  },
});

export default appStore;

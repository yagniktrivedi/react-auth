import { configureStore } from '@reduxjs/toolkit';
import userReducder from './userSlice';
import moviesReducer from './movieSlice';
import gptReducer from './gptSlice';

const appStore = configureStore({
	reducer: {
		user: userReducder,
		movies: moviesReducer,
		gpt: gptReducer,
	},
});

export default appStore;

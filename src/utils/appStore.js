import { configureStore } from '@reduxjs/toolkit';
import userReducder from './userSlice';
import moviesReducer from './movieSlice';
import gptReducer from './gptSlice';
import configReducer from './configSlice';

const appStore = configureStore({
	reducer: {
		user: userReducder,
		movies: moviesReducer,
		gpt: gptReducer,
		config: configReducer,
	},
});

export default appStore;

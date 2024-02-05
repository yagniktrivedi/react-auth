import { createSlice } from '@reduxjs/toolkit';

const configSlice = createSlice({
	name: 'config',
	initialState: {
		lang: 'en',
	},
	reducers: {
		chnageLanguage: (state, action) => {
			console.log('ACT', action);
			state.lang = action.payload;
		},
	},
});

export default configSlice.reducer;
export const { chnageLanguage } = configSlice.actions;

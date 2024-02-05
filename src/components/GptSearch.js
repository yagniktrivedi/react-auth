import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggetions from './GptMovieSuggestions';
import { BG_URL } from '../utils/constants';

const GptSearch = () => {
	return (
		<div>
			<div className="absolute -z-10">
				<img src={BG_URL} alt="bgImage" />
			</div>
			<GptSearchBar />
			<GptMovieSuggetions />
		</div>
	);
};

export default GptSearch;

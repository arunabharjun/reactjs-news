import React, { useState, useEffect } from 'react';
import { getHeadLines } from '../helpers/newsApi';

const HeadLines = () => {
	/**
	 * State for headlines
	 */
	const [
		headlines,
		setHeadlines
	] = useState([]);

	useEffect(() => {
		/**
		 * Initialise the headings
		 * as soon as the page loads
		 */
		initHeadlines();
	}, []);

	/**
	 * Utility fuction to initialise Head Lines
	 */
	const initHeadlines = () => {
		getHeadLines()
			.then((data) => {
				setHeadlines(data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return <React.Fragment>{JSON.stringify(headlines)}</React.Fragment>;
};

export default HeadLines;

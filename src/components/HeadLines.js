import React, { useState, useEffect } from 'react';
import { getHeadLines } from '../helpers/newsApi';
import { NewsItemCard } from './Card';
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
		 * Initialise the headlines
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

	/**
     * Passing all the headlines to the 
     * NewsItemCard component individually
     */
	const renderHeadlines = (headlines) => {
		return (
			<React.Fragment>
				{headlines.map((newsItem, i) => {
					return <NewsItemCard key={i}>{newsItem}</NewsItemCard>;
				})}
			</React.Fragment>
		);
	};

	/**
     * Rendering all the headlines
     */
	return <React.Fragment>{renderHeadlines(headlines)}</React.Fragment>;
};

export default HeadLines;

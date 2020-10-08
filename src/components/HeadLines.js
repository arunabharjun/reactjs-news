import React, { useState, useEffect } from 'react';
import { getHeadLines } from '../helpers/newsApi';
import { LoadingCard, NewsItemCard } from './Card';
import moment from 'moment';
import ShowError from './ShowError';

const HeadLines = () => {
	/**
	 * State for headlines
	 */
	const [
		headlines,
		setHeadlines
	] = useState([]);

	/**
	 * State to check loading status
	 */
	const [
		loading,
		setLoading
	] = useState(true);

	/**
	 * State to store current date
	 */
	const date = new Date();

	/**
	 * State to check error
	 */
	const [
		error,
		setError
	] = useState(false);

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
				if (!data.error) {
					setHeadlines(data);
					setLoading(false);
				}
				else {
					setLoading(false);
					setError(true);
				}
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
				setError(true);
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
	 * Page header
	 */
	const header = () => {
		return (
			<React.Fragment>
				<div className='page-header'>
					<h2 className='page-heading'>Top 10 Headlines</h2>
					<p className='block'>{moment(date).format('DD/MM/YYYY')}</p>
				</div>
			</React.Fragment>
		);
	};

	/**
     * Show the user that there is some error
     */
	const errorSvg = () => {
		return (
			<React.Fragment>
				<ShowError />
			</React.Fragment>
		);
	};

	/**
     * Rendering all the headlines
     */
	return (
		<React.Fragment>
			{/**
			 * Showing the page header
			 */}
			{!error && header()}

			{/**
			 * Show loading card while the headlines load
			 */}
			{!error && loading && <LoadingCard />}

			{/**
                * Show error if there is any
                */}
			{error && !loading && errorSvg()}

			{/**
			 * Show the headlines as soon as they load
			 */}
			{!error && !loading && renderHeadlines(headlines)}
		</React.Fragment>
	);
};

export default HeadLines;

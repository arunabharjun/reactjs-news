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
	 * States to check the status
	 * of loading and error
	 */
	const [
		status,
		setStatus
	] = useState({
		loading: true,
		error: false
	});

	/**
	 * Destructuring status
	 */
	const { loading, error } = status;

	/**
	 * State to store current date
	 */
	const date = new Date();

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
					/**
					 * If there is no error in response,
					 * set the data to headlines
					 * and reset all statuses
					 */
					setHeadlines(data);
					setStatus({
						...status,
						loading: false,
						error: false
					});
				}
				else {
					/**
					 * If there is error in response,
					 * reset loading and set error to true
					 */
					setStatus({
						...status,
						loading: false,
						error: true
					});
				}
			})
			.catch((error) => {
				console.log(error);

				/**
				 * If it fails,
				 * reset loading and 
				 * set error to true
				 */
				setStatus({
					...status,
					loading: false,
					error: true
				});
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
	 * Utility function to return current date
	 */
	const getCurrentDate = () => {
		return moment(date).format('DD/MM/YYYY');
	};

	/**
	 * Page header
	 */
	const header = () => {
		return (
			<React.Fragment>
				<div className='page-header'>
					<h2 className='page-heading'>Top 10 Headlines</h2>
					<p className='block'>{getCurrentDate()}</p>
				</div>
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
			{error && !loading && <ShowError />}

			{/**
			 * Show the headlines as soon as they load
			 */}
			{!error && !loading && renderHeadlines(headlines)}
		</React.Fragment>
	);
};

export default HeadLines;

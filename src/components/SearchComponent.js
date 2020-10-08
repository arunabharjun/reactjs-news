import React, { useState } from 'react';
import { getSearchResult } from '../helpers/newsApi';
import { NewsItemCard } from './Card';
import { SearchIcon } from './Icons';

const SearchComponent = () => {
	/**
     * State for storing user query
     */
	const [
		query,
		setQuery
	] = useState('');

	/**
     * State to store the search results
     */
	const [
		newsItems,
		setNewsItems
	] = useState([]);

	/**
     * Utility function to handle changes
     * in the search input field
     */
	const handleChange = (value) => {
		setQuery(value);
	};

	/**
     * Utility function to submit the search query
     * and store search result in newsItems
     */
	const handleSubmit = (e) => {
		/**
         * Prevent the browser window from
         * refreshing upon submit
         */
		e.preventDefault();

		getSearchResult(query)
			.then((data) => {
				setNewsItems(data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	/**
     * The form input to take user's search query
     */
	const searchInput = () => {
		return (
			<React.Fragment>
				<div className='search-form'>
					<form onSubmit={handleSubmit}>
						<input
							type='text'
							name=''
							id=''
							value={query}
							autoFocus
							placeholder={'Search news'}
							onChange={(e) => {
								handleChange(e.target.value);
							}}
						/>

						<button type='submit'>
							<SearchIcon />
						</button>
					</form>
				</div>
			</React.Fragment>
		);
	};

	/**
     * Passing individual search results in
     * NewsItemCard to render them
     */
	const renderSearchResults = (newsItems) => {
		return (
			<React.Fragment>
				{newsItems.map((newsItem, i) => {
					return <NewsItemCard key={i}>{newsItem}</NewsItemCard>;
				})}
			</React.Fragment>
		);
	};

	/**
     * Rendering the search component
     */
	return (
		<React.Fragment>
			{/**
             * Take search input
             */}
			{searchInput()}

			{/**
             * Show search result
             */}
			{renderSearchResults(newsItems)}
		</React.Fragment>
	);
};

export default SearchComponent;

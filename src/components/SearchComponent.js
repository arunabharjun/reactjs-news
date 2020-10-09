import React, { useState } from 'react';
import { getSearchResult } from '../helpers/newsApi';
import { LoadingCard, NewsItemCard } from './Card';
import { SearchIcon } from './Icons';
import IllustrationBox from './IllustrationBox';
import SearchSvg from './illustrations/SearchSvg';
import ShowError from './ShowError';

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
     * State to check searching status
     */
	const [
		searching,
		setSearching
	] = useState(false);

	/**
     * State to check errors
     */
	const [
		error,
		setError
	] = useState(false);

	/**
	 * Check if search was performed
	 */

	const [
		searched,
		setSearched
	] = useState(false);

	/**
     * State for result query
     */
	const [
		resultQuery,
		setResultQuery
	] = useState('');

	/**
     * Utility function to handle changes
     * in the search input field
     */
	const handleChange = (value) => {
		setError(false);
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

		/**
         * Check if query is empty or has only white spaces
         */
		if (!query.replace(/\s/g, '').length) {
			/**
             * if query is empty, reset query
             */
			setQuery('');
		}
		else {
			/**
             * If query is not empty,
             * execute the search
             */
			setSearched(false);
			setError(false);
			setSearching(true);
			setResultQuery(query);
			getSearchResult(query)
				.then((data) => {
					setNewsItems(data);
					if (!data.error) {
						setSearching(false);
						setSearched(true);
						setQuery('');
					}
					else {
						setSearching(false);
						setError(true);
					}
				})
				.catch((error) => {
					console.log(error);
					setSearching(false);
					setError(true);
				});
		}
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
							disabled={searching}
							onChange={(e) => {
								handleChange(e.target.value);
							}}
						/>

						<button type='submit' disabled={searching}>
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
				{newsItems.length > 0 && header()}
				{newsItems.map((newsItem, i) => {
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
					<h2 className='page-heading'>Search results</h2>
					<p className=''>Query : {resultQuery}</p>
				</div>
			</React.Fragment>
		);
	};

	/**
	 * Showing that no results were found
	 */
	const noResults = () => {
		return (
			<React.Fragment>
				<div className='page-header'>
					<h2 className='page-heading'>No search results</h2>
					<p className=''>Query : {resultQuery}</p>
				</div>
			</React.Fragment>
		);
	};

	/**
     * Showing search illustration when
     * page is empty
     */
	const searchSvg = () => {
		return (
			<React.Fragment>
				<IllustrationBox>
					<SearchSvg />
				</IllustrationBox>
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
     * Rendering the search component
     */
	return (
		<React.Fragment>
			{/**
             * Take search input
             */}
			{searchInput()}

			{/**
			  * Show no results found if
			  * newsItems is empty after
			  * performing a search successfully
			  */}
			{!error && searched && newsItems.length < 1 && noResults()}

			{/**
              * Show illustration
              */}
			{!error && !searching && newsItems.length < 1 && searchSvg()}

			{/**
               * Show loading card
               */}
			{!error && searching && <LoadingCard />}

			{/**
                * Show error if there is any
                */}
			{error && !searching && errorSvg()}

			{/**
             * Show search result
             */}
			{!error &&
				!searching &&
				newsItems.length > 0 &&
				renderSearchResults(newsItems)}
		</React.Fragment>
	);
};

export default SearchComponent;

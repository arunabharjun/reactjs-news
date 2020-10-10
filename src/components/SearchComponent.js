import React, { useState } from 'react';
import { getSearchResult } from '../helpers/newsApi';
import { LoadingCard, NewsItemCard } from './Card';
import { SearchIcon } from './Icons';
import IllustrationBox from './IllustrationBox';
import SearchSvg from './illustrations/SearchSvg';
import ShowError from './ShowError';

const SearchComponent = () => {
	/**
	 * States to store the query & search result
	 */
	const [
		values,
		setValues
	] = useState({
		query: '',
		resultQuery: '',
		newsItems: []
	});

	/**
	 * States to check status of error, searching and searched
	 */
	const [
		status,
		setStatus
	] = useState({
		error: false,
		searching: false,
		searched: false
	});

	const { query, resultQuery, newsItems } = values;
	const { error, searching, searched } = status;

	/**
     * Utility function to handle changes
     * in the search input field
     */
	const handleChange = (value) => {
		setStatus({
			...values,
			error: false,
			searching: false,
			searched: false
		});
		setValues({
			...values,
			query: value
		});
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
			setValues({
				...values,
				query: ''
			});
		}
		else {
			/**
             * If query is not empty,
             * execute the search
             */
			setStatus({
				...status,
				error: false,
				searching: true,
				searched: false
			});

			getSearchResult(query)
				.then((data) => {
					setValues({
						...values,
						query: '',
						resultQuery: query,
						newsItems: data
					});
					if (!data.error) {
						setStatus({
							...status,
							error: false,
							searching: false,
							searched: true
						});
					}
					else {
						setStatus({
							...status,
							error: true,
							searching: false,
							searched: false
						});
					}
				})
				.catch((error) => {
					console.log(error);
					setStatus({
						...status,
						error: true,
						searching: false,
						searched: false
					});
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

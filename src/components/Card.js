import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { SearchIcon } from '../assets/Icons';

/**
 * A component to render the news item
 */
export const NewsItemCard = ({ children }) => {
	/**
     * Destructuring children prop
     */
	const {
		title,
		urlToImage,
		source,
		description,
		publishedAt,
		url
	} = children;

	/**
     * The top banner image of news item
     */
	const bannerImage = (imgUrl) => {
		return (
			<React.Fragment>
				{/**
                 * Setting the background img to news image
                 */}
				<div
					className='banner-img'
					style={{
						backgroundImage: `url(${imgUrl})`
					}}
				>
					{/**
                     * Overlay
                     */}
					<div className='banner-img-overlay' />
				</div>
			</React.Fragment>
		);
	};

	/**
     * The news content of news item
     */
	const newsContent = () => {
		return (
			<React.Fragment>
				<div className='news-content'>
					{/**
                     * News headline
                     */}
					<h2>{title}</h2>

					{/**
                     * Short news content
                     */}
					<p className=''>{description}</p>

					<p className='news-source'>
						{/**
                         * Source of the news
                         */}
						<span>{source.name}</span>

						{/**
                         * Time when the source published
                         */}
						{moment(publishedAt).fromNow()}
					</p>
					<p className='' />
				</div>
			</React.Fragment>
		);
	};

	/**
     * The main news item card
     */
	const newsItem = () => {
		return (
			<React.Fragment>
				<div className='news-item'>
					<Link to={`/article?${url}`}>
						<div className='news-body'>
							{bannerImage(urlToImage)}
							{newsContent()}
						</div>
					</Link>
				</div>
			</React.Fragment>
		);
	};

	/**
     * Rendering the news item card
     */
	return <React.Fragment>{newsItem()}</React.Fragment>;
};

/**
 * A component to mimic the search input field
 */
export const SearchButtonCard = () => {
	/**
     * A card to act like a button
     * that redirects to the search page
     */
	const searchBtnCard = () => {
		return (
			<React.Fragment>
				<div className='search-btn-card'>
					<Link to={'/search'}>
						<div className='search-btn-card-body'>
							<p className=''>
								<span>Search news </span>
								<span>
									<SearchIcon />
								</span>
							</p>
						</div>
					</Link>
				</div>
			</React.Fragment>
		);
	};

	/**
     * Rendering the card
     */
	return <React.Fragment>{searchBtnCard()}</React.Fragment>;
};

/**
 * A component to show loading status
 * while the news items load
 */
export const LoadingCard = () => {
	/**
	 * Showing 3 loading cards
	 */
	const loaingCard = () => {
		return (
			<React.Fragment>
				<div className='shimmer-loading loading-card' />
				<div className='shimmer-loading loading-card' />
				<div className='shimmer-loading loading-card' />
			</React.Fragment>
		);
	};

	/**
	 * Rendering loading cards
	 */
	return <React.Fragment>{loaingCard()}</React.Fragment>;
};

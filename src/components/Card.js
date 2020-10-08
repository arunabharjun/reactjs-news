import React from 'react';
import moment from 'moment';

export const NewsItemCard = ({ children }) => {
	/**
     * Destructuring children prop
     */
	const { title, urlToImage, source, description, publishedAt } = children;

	/**
     * The top banner image of news item
     */
	const bannerImage = (url) => {
		return (
			<React.Fragment>
				{/**
                 * Setting the background img to news image
                 */}
				<div
					className='banner-img'
					style={{
						backgroundImage: `url(${url})`
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
					<div className='news-body'>
						{bannerImage(urlToImage)}
						{newsContent()}
					</div>
				</div>
			</React.Fragment>
		);
	};

	/**
     * Rendering the news item card
     */
	return <React.Fragment>{newsItem()}</React.Fragment>;
};

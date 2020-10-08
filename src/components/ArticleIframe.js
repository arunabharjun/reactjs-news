import React from 'react';
import { Link } from 'react-router-dom';
import { LeftChevron } from './Icons';

const ArticleIframe = ({ url }) => {
	/**
     * The iframe which renders selected article
     */
	const articleFrame = () => {
		return (
			<React.Fragment>
				<div className='article-iframe'>
					<iframe src={url} frameborder='0' />
				</div>
			</React.Fragment>
		);
	};

	/**
     * Button to go back to home page
     */
	const backButton = () => {
		return (
			<React.Fragment>
				<div className='article-back-btn'>
					<Link to={'/'}>
						<LeftChevron size={25} /> Back
					</Link>
				</div>
			</React.Fragment>
		);
	};

	/**
     * The complete component
     */
	const articleIframe = () => {
		return (
			<React.Fragment>
				{articleFrame()}
				{backButton()}
			</React.Fragment>
		);
	};

	/**
     * Rendering the article
     */
	return <React.Fragment>{articleIframe()}</React.Fragment>;
};

export default ArticleIframe;

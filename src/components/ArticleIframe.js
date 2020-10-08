import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LoadingCard } from './Card';
import { LeftChevron } from './Icons';

const ArticleIframe = ({ url }) => {
	/**
	 * State to check loading status
	 * of the iframe
	 */
	const [
		loading,
		setLoading
	] = useState(true);

	/**
     * The iframe which renders selected article
     */
	const articleFrame = () => {
		return (
			<React.Fragment>
				<div className='article-iframe'>
					<iframe
						title={'article'}
						src={url}
						frameborder='0'
						onLoad={() => setLoading(false)}
					/>
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
				<Link to={'/'}>
					<div className='article-back-btn'>
						<p className=''>
							<LeftChevron size={25} /> Back
						</p>
					</div>
				</Link>
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
				{loading && <LoadingCard />}
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

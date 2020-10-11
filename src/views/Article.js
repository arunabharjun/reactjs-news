import React from 'react';
import ArticleIframe from '../components/core/ArticleIframe';
import Layout from '../components/Layout';

const Article = (props) => {
	/**
     * The url of the article
     */
	const url = props.location.search.substring(1);

	/**
     * Passing the url of news article to render in
     * ArticleIframe component
     */
	return (
		<Layout>
			<ArticleIframe url={url} />
		</Layout>
	);
};

export default Article;

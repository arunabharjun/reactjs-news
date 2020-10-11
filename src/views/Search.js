import React from 'react';
import Footer from '../components/core/Footer';
import Layout from '../components/Layout';
import SearchComponent from '../components/SearchComponent';
import { getSearchResult } from '../helpers/newsApi';

const Search = () => {
	return (
		<React.Fragment>
			<Layout>
				<div className='container'>
					<SearchComponent executeSearchWith={getSearchResult} />
					<Footer />
				</div>
			</Layout>
		</React.Fragment>
	);
};

export default Search;

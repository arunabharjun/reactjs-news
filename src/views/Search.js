import React from 'react';
import Footer from '../components/core/Footer';
import Layout from '../components/Layout';
import SearchComponent from '../components/SearchComponent';

const Search = () => {
	return (
		<React.Fragment>
			<Layout>
				<div className='container'>
					<SearchComponent />
					<Footer />
				</div>
			</Layout>
		</React.Fragment>
	);
};

export default Search;

import React from 'react';
import Layout from '../components/Layout';
import SearchComponent from '../components/SearchComponent';

const Search = () => {
	return (
		<React.Fragment>
			<Layout>
				<div className='container'>
					<SearchComponent />
				</div>
			</Layout>
		</React.Fragment>
	);
};

export default Search;

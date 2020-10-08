import React from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import PageNotFoundComponent from '../components/PageNotFoundComponent';

const PageNotFound404 = () => {
	return (
		<React.Fragment>
			<Layout>
				<div className='container'>
					<PageNotFoundComponent />
					<Footer />
				</div>
			</Layout>
		</React.Fragment>
	);
};

export default PageNotFound404;

import React from 'react';
import { SearchButtonCard } from '../components/Card';
import HeadLines from '../components/HeadLines';
import Layout from '../components/Layout';

const Home = () => {
	return (
		<Layout>
			<div className='container'>
				<SearchButtonCard />
				<HeadLines />
			</div>
		</Layout>
	);
};

export default Home;

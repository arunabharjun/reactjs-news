import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Article from './views/Article';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/article' exact component={Article} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;

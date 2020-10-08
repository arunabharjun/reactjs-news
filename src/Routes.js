import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Article from './views/Article';
import Search from './views/Search';
import PageNotFound404 from './views/PageNotFound404';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/article' exact component={Article} />
				<Route path='/search' exact component={Search} />
				{/**
				 * 404 : Page not found error page
				 */}
				<Route path='*' component={PageNotFound404} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;

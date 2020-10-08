import React from 'react';
import './App.scss';
import Routes from './Routes';
import { ThemeProvider } from './components/ThemeContext';

function App() {
	return (
		<React.Fragment>
			<ThemeProvider>
				<Routes />
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;

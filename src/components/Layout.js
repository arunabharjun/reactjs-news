import React, { useState, useEffect } from 'react';
import { getTheme, setThemeDark, setThemeLight } from '../helpers/theme';
import Navigation from './Navigation';

const Layout = ({ children }) => {
	/**
     * States for theme
     */
	const [
		darkMode,
		setDarkMode
	] = useState(false);

	useEffect(() => {
		/**
         * set app theme from local storage
         */
		setDarkMode(getTheme());
	}, []);

	/**
     * utility function to toggle theme
     */
	const toggleTheme = () => {
		/**
         * Save theme in local storage
         */
		if (darkMode) setThemeLight();
		else setThemeDark();

		/**
         * change local state
         */
		setDarkMode(!darkMode);
	};

	return (
		<React.Fragment>
			<main className={`${darkMode ? 'darkMode' : 'liteMode'}`}>
				<Navigation />
				<button onClick={() => toggleTheme()}>theme</button>
				{children}
			</main>
		</React.Fragment>
	);
};

export default Layout;

import React, { useContext } from 'react';
import { setThemeDark, setThemeLight } from '../helpers/theme';
import { ThemeContext } from '../helpers/ThemeContext';

const NavBar = () => {
	/**
     * States for theme
     */
	const [
		darkMode,
		setDarkMode
	] = useContext(ThemeContext);

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
	     * change current state
	     */
		setDarkMode(!darkMode);
	};

	return <button onClick={toggleTheme}>theme</button>;
};

export default NavBar;

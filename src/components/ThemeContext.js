import React, { useState, createContext } from 'react';
import { getTheme } from '../helpers/theme';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	/**
     * States for theme
     */
	const [
		darkMode,
		setDarkMode
	] = useState(getTheme());

	return (
		<ThemeContext.Provider
			value={[
				darkMode,
				setDarkMode
			]}
		>
			{children}
		</ThemeContext.Provider>
	);
};

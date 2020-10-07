import React, { useContext } from 'react';
import { setThemeDark, setThemeLight } from '../helpers/theme';
import { ThemeContext } from '../helpers/ThemeContext';
import NavBar from './NavBar';

const Layout = ({ children }) => {
	/**
     * States for theme
     */
	const [
		darkMode,
		setDarkMode
	] = useContext(ThemeContext);

	return (
		<React.Fragment>
			<main className={`${darkMode ? 'darkMode' : 'liteMode'}`}>
				<NavBar />
				{children}
			</main>
		</React.Fragment>
	);
};

export default Layout;

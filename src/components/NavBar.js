import React, { useContext } from 'react';
import { setThemeDark, setThemeLight } from '../helpers/theme';
import { ThemeContext } from '../helpers/ThemeContext';
import { MoonIcon, SunIcon } from './Icons';

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

	return (
		<React.Fragment>
			<nav>
				<div className='nav-body'>
					<div className='container'>
						<button className='theme-toggle' onClick={toggleTheme}>
							{darkMode && <MoonIcon />}
							{!darkMode && <SunIcon />}
						</button>
					</div>
				</div>
			</nav>
		</React.Fragment>
	);
};

export default NavBar;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { setThemeDark, setThemeLight } from '../helpers/theme';
import { ThemeContext } from './ThemeContext';
import { MoonIcon, SunIcon, SearchIcon } from './Icons';

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

	/**
	 * rendering the theme toggle button
	 */
	const themeToggleButton = () => {
		return (
			<React.Fragment>
				<button className='theme-toggle' onClick={toggleTheme}>
					{/**
					 * Show the moon icon if darkmode is active
					 */}
					{darkMode && <MoonIcon />}

					{/**
					 * Shoe the sun icon if darkmode is not active
					 */}
					{!darkMode && <SunIcon />}
				</button>
			</React.Fragment>
		);
	};

	/**
	 * rendering the brand name
	 */
	const brandName = () => {
		return (
			<React.Fragment>
				<Link to={'/'}>
					<p className='nav-brand'>
						{/**
					 * Show the full brandname in desktops
					 */}
						<span className='name phone-hide'>
							React <span className='accent-clr'>News</span>
						</span>

						{/**
					 * Show the short brandname in phones
					 */}
						<span className='name phone-view'>
							R<span className='accent-clr'>N</span>
						</span>
					</p>
				</Link>
			</React.Fragment>
		);
	};

	/**
	 * rendering the search button
	 */
	const searchButton = () => {
		return (
			<React.Fragment>
				<Link to={'/search'}>
					<button className='search-icon'>
						<SearchIcon />
					</button>
				</Link>
			</React.Fragment>
		);
	};

	/**
	 * The main navvigation bar
	 */
	const navBar = () => {
		return (
			<React.Fragment>
				<nav>
					<div className='nav-body'>
						<div className='container flex-box flex-row flex-space-btw'>
							{themeToggleButton()}
							{brandName()}
							{searchButton()}
						</div>
					</div>
				</nav>
			</React.Fragment>
		);
	};

	/**
	 * rendering the Navigation Bar
	 */
	return <React.Fragment>{navBar()}</React.Fragment>;
};

export default NavBar;

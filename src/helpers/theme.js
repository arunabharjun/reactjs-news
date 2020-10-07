import { THEME } from '../config';
import { getLocalStorage, setLocalStorage } from './localStorage';

/**
 * Set theme to dark
 */
export const setThemeDark = () => {
	setLocalStorage(`${THEME}`, true);
};

/**
 * set theme to light
 */
export const setThemeLight = () => {
	setLocalStorage(`${THEME}`, false);
};

/**
 * get current theme
 */
export const getTheme = () => {
	return getLocalStorage(`${THEME}`);
};

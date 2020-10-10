/**
 * Set Value
 */
export const setLocalStorage = (key, value) => {
	/**
	 * Check if the code is running in a browser
	 */
	if (process.browser) {
		try {
			localStorage.setItem(key, JSON.stringify(value));
			return true;
		} catch (error) {
			console.error(error);
			return false;
		}
	}

	/**
	 * Return false if not a browser
	 */
	return false;
};

/**
 * Remove Value
 */
export const removeLocalStorage = (key) => {
	/**
	 * Check if the code is running in a browser
	 */
	if (process.browser) {
		try {
			localStorage.removeItem(key);
			return true;
		} catch (error) {
			console.error(error);
			return false;
		}
	}
	/**
	 * Return false if not a browser
	 */
	return false;
};

/**
 * Get Value
 */
export const getLocalStorage = (key) => {
	/**
	 * Check if the code is running in a browser
	 */
	if (process.browser) {
		try {
			if (localStorage.getItem(key)) {
				return JSON.parse(localStorage.getItem(key));
			}
			else {
				return false;
			}
		} catch (error) {
			console.error(error);
			return false;
		}
	}
	/**
	 * Return false if not a browser
	 */
	return false;
};

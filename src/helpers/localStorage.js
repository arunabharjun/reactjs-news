/**
 * Set Value
 */
export const setLocalStorage = (key, value) => {
	if (process.browser) {
		try {
			localStorage.setItem(key, JSON.stringify(value));
			return true;
		} catch (error) {
			console.error(error);
			return false;
		}
	}
	return false;
};

/**
 * Remove Value
 */
export const removeLocalStorage = (key) => {
	if (process.browser) {
		try {
			localStorage.removeItem(key);
			return true;
		} catch (error) {
			console.error(error);
			return false;
		}
	}
	return false;
};

/**
 * Get Value
 */
export const getLocalStorage = (key) => {
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
	return false;
};

import { API_KEY, API, HEADLINES_ENDPOINT, SEARCH_ENDPOINT } from '../config';
import axios from 'axios';

/**
 * Combining API with endpoints
 */
const headLineApi = `${API}/${HEADLINES_ENDPOINT}`;
const searchApi = `${API}/${SEARCH_ENDPOINT}`;

/**
 * Common header for our requests
 * to use the API key
 */
const headers = {
	'X-Api-Key': API_KEY
};

/**
 * helper function to get
 * the top 10 headlines
 */
export const getHeadLines = (country = 'in', pageSize = 10, page = 0) => {
	return axios
		.get(headLineApi, {
			params: {
				country,
				pageSize,
				page
			},
			headers
		})
		.then((response) => {
			return response.data.articles;
		})
		.catch((error) => {
			console.log(error);
			return { error: true };
		});
};

/**
 * Helper function to perform
 * search based on a query
 */
export const getSearchResult = (q = 'india', pageSize = 10, page = 0) => {
	return axios
		.get(searchApi, {
			params: {
				q,
				pageSize,
				page: 1 + page
			},
			headers
		})
		.then((response) => {
			return response.data.articles;
		})
		.catch((error) => {
			console.log(error);
			return { error: true };
		});
};

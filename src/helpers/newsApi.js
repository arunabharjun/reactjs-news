import { API_KEY, API, HEADLINES_ENDPOINT, SEARCH_ENDPOINT } from '../config';
import axios from 'axios';

const headLineApi = `${API}/${HEADLINES_ENDPOINT}`;
const searchApi = `${API}/${SEARCH_ENDPOINT}`;

export const getHeadLines = (country = 'in', pageSize = 10, page = 0) => {
	return axios
		.get(headLineApi, {
			params: {
				country,
				pageSize,
				page
			},
			headers: {
				'X-Api-Key': API_KEY
			}
		})
		.then((response) => {
			return response.data.articles;
		})
		.catch((error) => {
			console.log(error);
		});
};

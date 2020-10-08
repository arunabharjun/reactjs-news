import { API_KEY, API, HEADLINES_ENDPOINT, SEARCH_ENDPOINT } from '../config';
import axios from 'axios';

const headLineApi = `${API}/${HEADLINES_ENDPOINT}`;
const searchApi = `${API}/${SEARCH_ENDPOINT}`;

export const getHeadLines = (country = 'in', pageSize = 10, page = 0) => {
	return axios
		.get('https://jsonplaceholder.typicode.com/todos/1', {
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
			// return response.data.articles;
			return demo;
		})
		.catch((error) => {
			console.log(error);
			return { error: true };
		});
};

export const getSearchResult = (q = 'india', pageSize = 10, page = 0) => {
	return axios
		.get(searchApi, {
			params: {
				q,
				pageSize,
				page: 1 + page
			},
			headers: {
				'X-Api-Key': API_KEY
			}
		})
		.then((response) => {
			return response.data.articles;
			// return demo;
		})
		.catch((error) => {
			console.log(error);
			return { error: true };
		});
};

const demo = [
	{
		source: { id: null, name: 'NDTV News' },
		author: null,
		title:
			"BJP March To Mamata Banerjee's Office Stopped, Police Use Tear Gas - NDTV",
		description:
			"BJP's big march to Mamata Banerjee's office Nabanna in Kolkata stopped, police use tear gas, water cannons",
		url:
			'https://www.ndtv.com/india-news/bjps-big-march-to-mamata-banerjees-office-nabanna-in-kolkata-stopped-police-use-tear-gas-water-cannons-2306995',
		urlToImage:
			'https://c.ndtvimg.com/2020-10/oiprfo_bengal-bjp-march-tear-gas-october-2020_650x400_08_October_20.jpg?downsize=570:351',
		publishedAt: '2020-10-08T08:29:00Z',
		content:
			'Kolkata: Hundreds of BJP protesters clashed with the police outside the Bengal government secretariat "Nabanna" today, throwing to winds all safety measures for coronavirus including social distancin… [+1029 chars]'
	},
	{
		source: { id: null, name: 'Hindustan Times' },
		author: 'HT Correspondent | Edited by Abhinav Sahay',
		title:
			'Freedom of speech is most abused, says SC on ‘fake news’ on Tablighi Jamaat - Hindustan Times',
		description:
			'The petitioners alleged that television news channels reported the Tablighi Jamaat incident at Nizamuddin in a skewed manner, demonising the Muslim community,',
		url:
			'https://www.hindustantimes.com/india-news/freedom-of-speech-is-most-abused-sc-while-hearing-case-seeking-action-against-tv-channels-for-spreading-fake-news-on-tablighi-jamaat-congregation/story-AIny7fcoKPFmtZrsHH0ZHM.html',
		urlToImage:
			'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/10/08/Pictures/delhi-lockdown-covid-19-day-7_77cb562a-093c-11eb-9735-285f94a4b56e.jpg',
		publishedAt: '2020-10-08T08:05:00Z',
		content:
			'Freedom of speech is one of the most abused freedoms during recent times, the Supreme Court said on Thursday while hearing a case seeking action against television channels for allegedly disseminatin… [+2739 chars]'
	},
	{
		source: { id: null, name: 'India.com' },
		author: 'Zee Media Bureau',
		title:
			'After heartbreaking video of Baba Ka Dhaba`s elderly couple went viral, AAP MLA and celebs offer help; beco... - Zee News',
		description:
			'The power of social media is known to all! And especially in times of crisis, it has come to the rescue of many needy people.',
		url:
			'https://zeenews.india.com/people/after-heartbreaking-video-of-baba-ka-dhabas-elderly-couple-went-viral-aap-mla-and-celebs-offer-help-becomes-top-trend-on-twitter-watch-2315701.html',
		urlToImage:
			'https://english.cdn.zeenews.com/sites/default/files/2020/10/08/891334-baba-ka-dhaba.jpg',
		publishedAt: '2020-10-08T07:49:16Z',
		content:
			'New Delhi: The power of social media is known to all! And especially in times of crisis, it has come to the rescue of many needy people. After a video of an elderly couple running a small kiosk named… [+1833 chars]'
	}
];

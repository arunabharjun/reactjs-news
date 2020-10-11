import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchComponent from '../SearchComponent';
import { act } from 'react-dom/test-utils';

describe('<SearchComponent/>', () => {
	test('renders correctly', () => {
		const { queryByTestId, queryByPlaceholderText } = render(
			<SearchComponent />
		);

		expect(queryByTestId('search-button')).toBeTruthy();
		expect(queryByPlaceholderText('Search news')).toBeTruthy();
	});

	test('input value updates on change', () => {
		const { queryByPlaceholderText } = render(<SearchComponent />);
		const searchInput = queryByPlaceholderText('Search news');
		fireEvent.change(searchInput, { target: { value: 'test' } });
		expect(searchInput.value).toBe('test');
	});

	test('Search button doesnot trigger API call with empty query', () => {
		const getSearchResult = jest.fn();

		const { queryByTestId } = render(
			<SearchComponent executeSearchWith={getSearchResult} />
		);
		fireEvent.click(queryByTestId('search-button'));
		expect(getSearchResult).not.toHaveBeenCalled();
	});

	test('Search button triggers API call with query', async () => {
		const promise = Promise.resolve();
		const getSearchResult = jest.fn().mockResolvedValue({
			source: { id: 'id', name: 'name' },
			author: 'author name',
			title: 'news title',
			description: 'Some news description',
			url: 'https://url.com/to-the-article',
			urlToImage: 'https://url.com/to-the-article-image',
			publishedAt: '2020-09-15T17:39:14Z',
			content: 'content of the news article'
		});

		const { queryByTestId, queryByPlaceholderText } = render(
			<SearchComponent executeSearchWith={getSearchResult} />
		);
		const searchInput = queryByPlaceholderText('Search news');

		fireEvent.change(searchInput, { target: { value: 'test' } });
		fireEvent.click(queryByTestId('search-button'));
		expect(getSearchResult).toHaveBeenCalledWith('test');
		await act(() => promise);
	});
});

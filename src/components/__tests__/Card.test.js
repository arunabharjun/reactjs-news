import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { NewsItemCard } from '../core/Card';

const mockData = {
	source: { id: 'id', name: 'name' },
	author: 'author name',
	title: 'news title',
	description: 'Some news description',
	url: 'https://url.com/to-the-article',
	urlToImage: 'https://url.com/to-the-article-image',
	publishedAt: '2020-09-15T17:39:14Z',
	content: 'content of the news article'
};
describe('<NewsItemCard/>', () => {
	test('<NewsItemCard/> renders correctly with data', () => {
		const renderer = new ShallowRenderer();
		renderer.render(<NewsItemCard>{mockData}</NewsItemCard>);
		const result = renderer.getRenderOutput();
		expect(result).toBeTruthy();
	});
});

import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ArticleIframe from '../core/ArticleIframe';

describe('<NewsItemCard/>', () => {
	test('<NewsItemCard/> renders correctly with data', () => {
		const renderer = new ShallowRenderer();
		renderer.render(<ArticleIframe />);
		const result = renderer.getRenderOutput();
		expect(result).toBeTruthy();
	});
});

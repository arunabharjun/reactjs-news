import { render } from '@testing-library/react';
import React from 'react';
import Footer from '../core/Footer';

test('<Footer/> Renders correctly', () => {
	const { asFragment } = render(<Footer />);
	expect(asFragment()).toMatchSnapshot();
});

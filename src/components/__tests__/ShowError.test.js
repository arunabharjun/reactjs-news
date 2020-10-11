import { render } from '@testing-library/react';
import React from 'react';
import ShowError from '../core/ShowError';
test('<Footer/> Renders correctly', () => {
	const { asFragment } = render(<ShowError />);
	expect(asFragment()).toMatchSnapshot();
});

import React from 'react';
import { Link } from 'react-router-dom';
import IllustrationBox from './IllustrationBox';
import NotFoundSvg from '../../assets/NotFoundSvg';

const PageNotFoundComponent = () => {
	return (
		<React.Fragment>
			<IllustrationBox>
				<NotFoundSvg />
				<p className='error-msg'>Oops! This page doesnt exist.</p>
				<Link to={'/'}>
					<b>
						{' '}
						<span className='accent-clr'>
							TAKE ME TO HOME PAGE
						</span>{' '}
					</b>
				</Link>
			</IllustrationBox>
		</React.Fragment>
	);
};

export default PageNotFoundComponent;

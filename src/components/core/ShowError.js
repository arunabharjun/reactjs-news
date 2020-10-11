import React from 'react';
import IllustrationBox from './IllustrationBox';
import ErrorSvg from '../../assets/ErrorSvg';

const ShowError = () => {
	return (
		<React.Fragment>
			<IllustrationBox>
				<ErrorSvg />
				<p className='error-msg'>
					Something went wrong! <br /> Please try again.
				</p>
			</IllustrationBox>
		</React.Fragment>
	);
};

export default ShowError;

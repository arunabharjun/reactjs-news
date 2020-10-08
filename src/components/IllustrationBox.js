import React from 'react';

const IllustrationBox = ({ children }) => {
	return (
		<React.Fragment>
			<div className='illustration-box'>{children}</div>
		</React.Fragment>
	);
};

export default IllustrationBox;

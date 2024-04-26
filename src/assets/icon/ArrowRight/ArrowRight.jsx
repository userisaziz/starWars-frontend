import React from 'react';

const ArrowRight = (props) => {
	const { color } = props;
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none" {...props}>
			<path d="M1 1L5 6L1 11" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
};

export default ArrowRight;

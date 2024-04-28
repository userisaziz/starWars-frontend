import React from 'react';

import './Typography.scss';
const Typography = (props) => {
	const { variant, children, className, style, type } = props;
	const Component = variant ? variant : 'p';
	const customClassName = `${className} Typography--${type}`;

	return (
		<Component className={customClassName} {...props}>
			{children}
		</Component>
	);
};

export default Typography;

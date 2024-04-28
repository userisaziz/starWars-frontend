import React from 'react';
import './ValueField.scss';

// import 'react-loading-skeleton/dist/skeleton.css';
// import Skeleton from 'react-loading-skeleton';

const ValueField = (props) => {
	const { label, children, className, isLoading, value } = props;
	console.log('value: ', value);
	const customClassName = `ValueField ${className}`;
	return (
		<div className={customClassName}>
			<span className="ValueField--Label">{label}</span>
			<span className="ValueField--Value">{value}</span>
			{/* {isLoading && (
                <div>
                    <Skeleton className="ValueField--Description" />
                </div>
            )} */}
			{/* {!isLoading && <div className="ValueField--Description">{children ? children : '-'}</div>} */}
		</div>
	);
};

export default ValueField;

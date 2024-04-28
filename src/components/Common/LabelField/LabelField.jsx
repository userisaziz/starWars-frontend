import React from 'react';
import './LabelField.scss';

const LabelField = ({ label = 'Email:', value = 'rohanpande@gmail.com', icon }) => {
	return (
		<div className="LabelField">
			<div className="LabelField--Icon">{icon}</div>
			<span className="LabelField--Label">{label}</span>
			<span className="LabelField--Value">{value}</span>
		</div>
	);
};

export default LabelField;

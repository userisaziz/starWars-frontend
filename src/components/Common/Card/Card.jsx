import React from 'react';
import './Card.scss'; // Import your SCSS styles
import { useNavigate } from 'react-router-dom';
import { pathname } from '../../../router/pathname';
import Button from '../Button/Button';
import ValueField from '../ValueField/ValueField';
import Typography from '../Typography/Typography';

export const Card = ({ planets, children }) => {
	return <div className="Card">{children}</div>;
};

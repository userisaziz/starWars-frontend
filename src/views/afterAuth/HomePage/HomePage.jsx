import React, { useEffect } from 'react';
import './HomePage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllPlanets } from './Redux/actionCreator';
import { Card } from '../../../components';

const HomePage = () => {
	const dispatch = useDispatch();
	const { home } = useSelector((state) => state);
	const { allPlanetDetails } = home;
	useEffect(() => {
		dispatch(useGetAllPlanets());
	}, []);
	return (
		<div>
			<h1>Planets</h1>
			<Card planets={allPlanetDetails} />
		</div>
	);
};

export default HomePage;

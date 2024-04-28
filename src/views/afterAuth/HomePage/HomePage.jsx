import React, { useEffect, useState } from 'react';
import './HomePage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllPlanets } from './Redux/actionCreator';
import { Card } from '../../../components';
import { Button, Pagination, Typography, ValueField } from '../../../components/Common';
import { useNavigate } from 'react-router-dom';
import { pathname } from '../../../router/pathname';

const HomePage = () => {
	const dispatch = useDispatch();
	const { home, loading } = useSelector((state) => state);
	const { allPlanetDetails } = home;
	const [currentPage, setCurrentPage] = useState(1);
	const navigate = useNavigate();
	const handlePagination = () => {
		setCurrentPage(currentPage + 1);
	};
	useEffect(() => {
		dispatch(useGetAllPlanets({ page: currentPage }));
	}, [currentPage]);
	return (
		<div>
			{loading ? (
				<div className="preloader">
					<PreLoader />
				</div>
			) : (
				<>
					<div className="HomePage--Header">
						<Typography className="HomePage--HeaderTitle">Planets</Typography>
					</div>
					<div className="HomePage--Container">
						{allPlanetDetails.map((planet, index) => (
							<Card>
								<Typography className="Card--Title">{planet.name}</Typography>
								<ValueField label="Rotation Period: " value={planet.rotation_period} />
								<ValueField label="Orbital Period: " value={planet.orbital_period} />
								<ValueField label="Diameter: " value={planet.diameter} />
								<ValueField label="Climate: " value={planet.climate} />
								<ValueField label="Gravity: " value={planet.gravity} />
								<ValueField label="Terrain: " value={planet.terrain} />
								<ValueField label="Surface Water: " value={planet.surface_water} />
								<ValueField label="Population: " value={planet.population} />
								<div className="HomePage--Footer">
									<Button
										onClick={() => navigate(pathname.RESIDENTS, { state: { planet: planet.url } })}
									>
										View Residents
									</Button>
								</div>
							</Card>
						))}
						<Pagination pageCount={10} onPageChange={handlePagination} />
					</div>
				</>
			)}
		</div>
	);
};

export default HomePage;

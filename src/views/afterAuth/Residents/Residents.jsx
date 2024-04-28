import React, { useState, useEffect } from 'react';

import { Get } from '../../../services';
import { Button, Pagination, Table, Typography, ValueField } from '../../../components/Common';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchResidentsByPlanet } from '../HomePage/Redux/actionCreator';
import './ResidentsDisplay.scss';
import { ArrowLeft, ArrowRight, PreLoader } from '../../../assets/icon';
import { pathname } from '../../../router/pathname';
const ResidentsDisplay = ({ planetUrl }) => {
	const location = useLocation();
	const url = location.state;

	const dispatch = useDispatch();
	const { home } = useSelector((state) => state);
	const { allResidents, loading } = home;

	const [currentPage, setCurrentPage] = useState(1);
	const navigate = useNavigate();
	const handlePagination = () => {
		setCurrentPage(currentPage + 1);
	};
	useEffect(() => {
		dispatch(fetchResidentsByPlanet({ url: url }));
	}, [currentPage]);

	const header = [
		{ headerName: 'Name', field: 'name' },
		{ headerName: 'Birth Year', field: 'birth' },
		{ headerName: 'Gender', field: 'gender' },
		{ headerName: 'Eye Color', field: 'eyeColor' },
		{ headerName: 'Hair Color', field: 'hairColor' },
		{ headerName: 'Height', field: 'height', width: 90 },
		{ headerName: 'Mass', field: 'mass' },
		{ headerName: 'Skin Color', field: 'skinColor' },
	];
	return (
		<div>
			{loading ? (
				<div className="preloader">
					<PreLoader />
				</div>
			) : (
				<>
					<div className="ResidentsDisplay--Header">
						<div onClick={() => navigate(pathname.HOME)}>
							<ArrowLeft />
						</div>
						<Typography className="HomePage--HeaderTitle">Residents</Typography>
					</div>
					<div className="ResidentsDisplay--Container">
						<Table header={header} row={allResidents} suppressPagination={true} isFullWidth={true} />
					</div>
				</>
			)}
		</div>
	);
};

export default ResidentsDisplay;

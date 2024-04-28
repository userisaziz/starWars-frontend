import React from 'react';
import { Outlet } from 'react-router-dom';

const HomePageLayout = () => {
	return (
		<div className="HomePageLayout">
			<Outlet />
		</div>
	);
};

export default HomePageLayout;

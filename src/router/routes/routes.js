import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { pathname } from '../pathname';
import HomePage from '../../views/afterAuth/HomePage/HomePage';
import { ErrorBoundary } from '../../components';
import HomePageLayout from '../../layouts/HomePageLayout/HomePageLayout';
import ResidentsDisplay from '../../views/afterAuth/Residents/Residents';

const router = createBrowserRouter([
	{
		path: pathname.HOME,
		element: <HomePageLayout />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: pathname.RESIDENTS,
				element: <ResidentsDisplay />,
			},
		],
	},
]);

export default router;

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { pathname } from '../pathname';
import HomePage from '../../views/afterAuth/HomePage/HomePage';
import { ErrorBoundary } from '../../components';

const router = createBrowserRouter([
	{
		path: pathname.HOME,
		element: <HomePage />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
		],
	},
]);

export default router;

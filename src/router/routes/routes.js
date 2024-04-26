import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { pathname } from '../pathname';
import HomePage from '../../views/afterAuth/HomePage/HomePage';

const router = createBrowserRouter([
	{
		path: pathname.HOME,
		element: <HomePage />,
		// errorElement: <ErrorBoundary />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
		],
	},
]);

export default router;

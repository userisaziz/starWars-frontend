import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ScrollRestoration } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// import { ErrorPrompt, Header, SideMenu, Typography } from '../../components';

import './AdminPanelLayout.scss';
import { Header } from '../../components';
import { SideMenu } from '../../components/Layout';

const AdminPanelLayout = (props) => {
	const {} = props;

	// const location = useLocation();

	// const HttpServiceStore = useSelector((state) => state.httpService);

	// console.log(HttpServiceStore, 'ccomssttt');

	// const ComponentStore = useSelector((state) => state?.components);

	return (
		<div className="AdminPanel">
			<Header />
			<SideMenu className="AdminPanel--SideMenu" />
			<section className="AdminPanel--Right">
				<section className="AdminPanel--Body">
					<Outlet />
				</section>
			</section>

			{/* <ErrorPrompt
				title="Error"
				isOpen={ComponentStore.isOpenErrorPrompt}
				errorDescription={HttpServiceStore?.errorDescription}
			>
				{HttpServiceStore.errorMessage}
			</ErrorPrompt> */}
			<ScrollRestoration />
		</div>
	);
};

export default AdminPanelLayout;

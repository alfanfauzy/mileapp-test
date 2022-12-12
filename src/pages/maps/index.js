import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Map from '../../components/atoms/Map';
import Footer from '../../components/layouts/Footer';
import PageWrapper from '../../components/layouts/PageWrapper';

const UserPage = () => {
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem('authenticated');
		navigate('/');
	};

	useEffect(() => {
		document.title = 'Maps - MileAppTest';
		const isLoggedIn = localStorage.getItem('authenticated');
		if (!isLoggedIn) {
			localStorage.removeItem('authenticated');
			navigate('/');
			toast.error(`You don't have credential to access page`);
		}
		// eslint-disable-next-line
	}, []);

	return (
		<PageWrapper title={'Map'} handleClick={handleLogout} withLogout>
			<div style={{ minHeight: '650px' }}>
				<Map />
			</div>
			<Footer />
		</PageWrapper>
	);
};

export default UserPage;

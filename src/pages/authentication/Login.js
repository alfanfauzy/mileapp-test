import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
	Wrapper,
	WrapperLogin,
	Container,
	ImageLogo,
	WrapperLoginImage,
} from './styled';
import imageLogo from '../../assets/images/mile-app.png';
import imageBackground from '../../assets/images/background.png';
import Footer from '../../components/layouts/Footer';
import LoginForm from '../../components/molecules/LoginForm';

function LoginPage() {
	const navigate = useNavigate();

	const [credentials, setCredentials] = useState({
		username: '',
		password: '',
	});

	const handleSubmit = (event) => {
		event.preventDefault();

		const isValid =
			credentials.username === 'admin' &&
			credentials.password === 'mileapp';

		// Validate the login credentials and update the login status
		if (isValid) {
			localStorage.setItem('authenticated', 'true');
			navigate('/user');
		} else {
			toast.error('Invalid credentials');
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setCredentials({ ...credentials, [name]: value });
	};

	useEffect(() => {
		document.title = 'Login Page - MileAppTest';
		const isLoggedIn = localStorage.getItem('authenticated');
		if (isLoggedIn) {
			navigate('/user');
		}
		// eslint-disable-next-line
	}, []);

	return (
		<Wrapper>
			<Container>
				<WrapperLogin>
					<a
						href="https://enterprise.mile.app/"
						style={{ textAlign: 'center', display: 'block' }}
					>
						<ImageLogo src={imageLogo} alt={imageLogo} />
					</a>
					<LoginForm
						onSubmit={handleSubmit}
						onChange={handleChange}
					/>
				</WrapperLogin>
				<WrapperLoginImage>
					<img src={imageBackground} alt={imageBackground} />
				</WrapperLoginImage>
			</Container>
			<Footer />
		</Wrapper>
	);
}

export default LoginPage;

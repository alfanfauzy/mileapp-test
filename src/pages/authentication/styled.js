import styled from 'styled-components';

const Wrapper = styled.div`
	overflow: hidden;
	background: white;
	min-height: 100%;
	background-image: url('./background-secondary.png');
	background-repeat: no-repeat;
	background-position: 100%;
	padding: 90px 150px 0;
`;

const Container = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	display: flex;
	max-height: 100%;
`;

const WrapperLogin = styled.div`
	width: 30%;
	font-size: 14px;
`;

const ImageLogo = styled.img`
	height: auto;
	width: 8em;
	max-width: 200px;
`;

const WrapperLoginImage = styled.div`
	width: 50%;
`;

const LinkExam = styled.div`
	margin-top: 1rem;
	font-size: 1.3rem;
	display: flex;
	justify-content: center;
	align-items: end;
	'a': {
		text-decoration: none;
	}
`;

export {
	Wrapper,
	Container,
	WrapperLogin,
	ImageLogo,
	WrapperLoginImage,
	LinkExam,
};

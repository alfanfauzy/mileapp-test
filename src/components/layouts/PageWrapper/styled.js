import styled from 'styled-components';

const Wrapper = styled.div`
	background-color: white;
	overflow: hidden;
	min-height: 100%;
`;

const WrapperHeader = styled.div`
	padding: 0 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
	border-bottom: 1px solid #eee;
	box-shadow: 1px 3px 5px -3px rgba(163, 163, 163, 1);
`;

const Button = styled.button`
	display: flex;
	gap: 5px;
	background: none;
	border: none;
	text-transform: uppercase;
	text-decoration: underline;
	color: #f9651f;
	cursor: pointer;
	&:hover {
		color: #02a8f3;
	}
`;

export { Wrapper, WrapperHeader, Button };

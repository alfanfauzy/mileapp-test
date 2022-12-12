import React from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import Footer from '../Footer';
import { Button, Wrapper, WrapperHeader } from './styled';

/**
 *
 * @param {{
 * chidlren: React.ReactNode,
 * title: string,
 * handlClick: function
 * }} props
 * @returns
 */
const PageWrapper = (props) => {
	const { children, title, handleClick } = props;
	return (
		<Wrapper>
			<WrapperHeader>
				<h2>{title}</h2>
				<Button onClick={handleClick}>
					<AiOutlineLogout />
					Logout
				</Button>
			</WrapperHeader>
			{children}
			<Footer />
		</Wrapper>
	);
};

export default PageWrapper;

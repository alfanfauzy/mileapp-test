import React from 'react';
import { AiOutlineLogout, AiFillCaretLeft } from 'react-icons/ai';
import Footer from '../Footer';
import { Button, Wrapper, WrapperHeader } from './styled';

/**
 *
 * @param {{
 * chidlren: React.ReactNode,
 * title: string,
 * handlClick: function
 * withLogout: boolean
 * }} props
 * @returns
 */
const PageWrapper = (props) => {
	const { children, title, handleClick, withLogout } = props;
	return (
		<Wrapper>
			<WrapperHeader>
				<h2>{title}</h2>
				{withLogout ? (
					<Button onClick={handleClick}>
						<AiOutlineLogout />
						Logout
					</Button>
				) : (
					<Button onClick={handleClick}>
						<AiFillCaretLeft />
						Back
					</Button>
				)}
			</WrapperHeader>
			{children}
			<Footer />
		</Wrapper>
	);
};

export default PageWrapper;

import React from 'react';
import styled from 'styled-components';
import InputFormMolecules from '../InputForm';
import AtomButton from '../../atoms/Button';

import { LoginCard, TitleText } from './styled';

/**
 *
 * @param {{
 * onChange: function,
 * onSubmit: function,
 * }} props
 * @returns
 */
const LoginForm = (props) => {
	const { onChange, onSubmit } = props;
	return (
		<LoginCard>
			<TitleText>Login</TitleText>
			<form onSubmit={onSubmit}>
				<InputFormMolecules title={'Email or Username'}>
					<Input
						type="text"
						name="username"
						onChange={onChange}
						placeholder="Input your Email or Username"
					/>
				</InputFormMolecules>
				<InputFormMolecules title={'Password'}>
					<Input
						type="password"
						name="password"
						onChange={onChange}
						placeholder="Input your Password"
					/>
				</InputFormMolecules>

				<AtomButton title={'Login'} />
				<p>
					Not registered yet?{' '}
					<a href="https://mywa.link/vr0op24n">Contact us</a> for more
					info
				</p>
			</form>
		</LoginCard>
	);
};

const Input = styled.input`
	background-color: #fff;
	border-radius: 4px;
	border: 1px solid #dcdfe6;
	box-sizing: border-box;
	color: #606266;
	display: inline-block;
	font-size: inherit;
	height: 40px;
	line-height: 40px;
	outline: 0;
	padding: 0 15px;
	transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
	width: 100%;
`;

export default LoginForm;

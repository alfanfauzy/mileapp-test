import React from 'react';
import styled from 'styled-components';
import Label from '../../atoms/Label';

/**
 *
 * @param {{
 * title: string,
 * chidren: React.ReactNode
 * }} props
 * @returns
 */
const InputFormMolecules = (props) => {
	const { title, children } = props;
	return (
		<InputForm>
			<Label title={title} />
			<ItemContent>{children}</ItemContent>
		</InputForm>
	);
};

const InputForm = styled.section`
	display: flex;
	flex-direction: column;
`;

const ItemContent = styled.span`
	line-height: 25px;
	font-size: 14px;
`;

export default InputFormMolecules;

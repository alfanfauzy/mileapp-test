import React from 'react';
import styled from 'styled-components';

/**
 *
 * @param {{
 * title: string
 * }} props
 * @returns
 */
const Label = (props) => {
	const { title } = props;
	return <ItemLabel>{title}</ItemLabel>;
};

const ItemLabel = styled.span`
	font-size: 16px;
	font-weight: 600;
	line-height: 30px;
	text-align: left;
	vertical-align: middle;
	color: #606266;
	line-height: 40px;
	padding: 0 12px 0 0;
	box-sizing: border-box;
`;

export default Label;

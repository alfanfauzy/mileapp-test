import styled from 'styled-components';
/**
 *
 * @param {{
 * title: string,
 * type: string,
 * }} props
 * @returns
 */
const AtomButton = (props) => {
	const { title, type } = props;
	return <Button type={type}> {title} </Button>;
};

const Button = styled.button`
    padding: 12px 20px;
    width: auto;
    margin: 1rem 0 0;
    color: #fff;
    background-color: #02a8f3;
    border: 1px solid #dcdfe6;
    min-width: 130px;
    border-radius: 4px;
}
`;

export default AtomButton;

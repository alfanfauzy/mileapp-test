import styled from 'styled-components';

const WrapperExam = styled.div`
	height: 100%;
	margin-bottom: 1rem;
	padding: 20px 30px;
`;

const CardExam = styled.div`
	border: 1px solid darkgrey;
	border-radius: 5px;
	padding: 30px;
	margin: 1rem;
`;

const Question = styled.h4`
	font-size: 1rem;
`;

const Answer = styled.span`
	font-size: 0.9rem;
`;

const WrapperCodeExam = styled.div`
	border: 1px solid darkgrey;
	margin: 1rem;
	padding: 30px;
`;

const TitleCode = styled.p`
	font-weight: bold;
`;

const QuestionCode = styled.div``;

export {
	WrapperExam,
	CardExam,
	Question,
	Answer,
	WrapperCodeExam,
	TitleCode,
	QuestionCode,
};

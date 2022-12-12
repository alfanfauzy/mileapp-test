import React, { useState } from 'react';
import {
	convertArray,
	findMissingNumber,
	findNumberMoreCalled,
	swabVariable,
} from '../../../shared/exam';
import {
	WrapperExam,
	CardExam,
	Question,
	Answer,
	WrapperCodeExam,
	TitleCode,
	QuestionCode,
} from './style';

const ExamMoluceles = () => {
	const [missingNumber, setMissingNumber] = useState([]);
	const [numberMoreCalled, setNumberMoreCalled] = useState([]);

	const handleFindMissingNumber = () => {
		const getMissingNumber = findMissingNumber();

		setMissingNumber(getMissingNumber);
	};

	const handleFindNumberMoreCalled = () => {
		const getFindNumber = findNumberMoreCalled();

		setNumberMoreCalled(getFindNumber);
	};

	return (
		<WrapperExam>
			<h2 style={{ margin: '1rem' }}>Quetion Test</h2>
			<CardExam>
				<Question>1. Do you prefer vuejs or reactjs? Why ?</Question>
				<Answer>
					I prefer <b>reactjs</b>, because React is the first frontend
					library that I learn, easy to learn because having many
					communities will help, one of the frameworks still needed by
					many companies.
				</Answer>
			</CardExam>

			<CardExam>
				<Question>
					2. What complex things have you done in frontend development
					?
				</Question>
				<Answer>
					Responsive website and PWA, but I still learn from basic
				</Answer>
			</CardExam>

			<CardExam>
				<Question>
					3. why does a UI Developer need to know and understand UX?
					how far do you understand it?
				</Question>
				<Answer>
					Because when UI Developer know UX the will serve good
					visuality with effective functions or flow when used by the
					user. <br /> I just know little bit about UI/UX. From my
					latest project, UI/UX has served by Product Design
				</Answer>
			</CardExam>

			<CardExam>
				<Question>
					4. Give your analysis results regarding
					https://taskdev.mile.app/login from the UI / UX side!
				</Question>
				<Answer>
					My first impression when accessing the website is confusion
					about Login Page with an image beside the form. I think the
					form border can be set a little bit thick or changed image
					to make the login form looks more out
				</Answer>
			</CardExam>

			<hr />

			<h2 style={{ margin: '1rem' }}>Logical Test</h2>

			<WrapperCodeExam>
				<TitleCode>1. Swap Values</TitleCode>
				<QuestionCode>
					<p>See result in console.log</p>
					<button onClick={swabVariable}>Swab Variable</button>
				</QuestionCode>
			</WrapperCodeExam>
			<WrapperCodeExam>
				<TitleCode>2. Find the missing numbers</TitleCode>
				<QuestionCode>
					<p>
						The missing number is:{' '}
						{missingNumber && missingNumber.join(', ')}
					</p>
					<button onClick={handleFindMissingNumber}>
						Find Missing Number
					</button>
				</QuestionCode>
			</WrapperCodeExam>
			<WrapperCodeExam>
				<TitleCode>
					3. Find the number which called more than 1
				</TitleCode>
				<QuestionCode>
					<p>
						The more called number is: {numberMoreCalled.join(', ')}
					</p>
					<button onClick={handleFindNumberMoreCalled}>
						Find More Called Number
					</button>
				</QuestionCode>
			</WrapperCodeExam>
			<WrapperCodeExam>
				<TitleCode>4. Change array to object</TitleCode>
				<QuestionCode>
					<button onClick={convertArray}>
						Convert Array to Object
					</button>
				</QuestionCode>
			</WrapperCodeExam>
		</WrapperExam>
	);
};

export default ExamMoluceles;

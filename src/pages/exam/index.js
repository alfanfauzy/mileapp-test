import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../../components/layouts/PageWrapper';
import ExamMoluceles from '../../components/molecules/Exam';

const ExamPage = () => {
	const navigate = useNavigate();

	const handleBack = () => {
		navigate('/');
	};

	return (
		<PageWrapper
			title="Frontend Test Exam"
			withLogout={false}
			handleClick={handleBack}
		>
			<ExamMoluceles />
		</PageWrapper>
	);
};

export default ExamPage;

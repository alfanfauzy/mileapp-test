import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LoginPage from './pages/authentication/Login';
import UserPage from './pages/maps';
import ExamPage from './pages/exam';

const componentRoot = document.getElementById('root');
const root = ReactDOM.createRoot(componentRoot);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" index element={<LoginPage />} />
				<Route path="/user" element={<UserPage />} />
				<Route path="/exam" element={<ExamPage />} />
			</Routes>
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
		</BrowserRouter>
	</React.StrictMode>
);

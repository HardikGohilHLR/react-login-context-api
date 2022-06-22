// App

import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from "./components/navbar";
import { LoginContextProvider } from './context/loginContext';

const Home = lazy(() => import('./pages/home'));
const Login = lazy(() => import('./pages/login'));

const App = () => {
	
	return (
		<React.Fragment>
			<LoginContextProvider>
				<Navbar />

				<Suspense fallback={<p>Loading</p>}>
					<Routes>
						<Route path="" element={<Login />} ></Route>
						<Route path="/home" element={<Home />} ></Route>
					</Routes>
				</Suspense>

			</LoginContextProvider>

		</React.Fragment>
	);
}

export default App;

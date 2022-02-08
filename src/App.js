import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { LoginContextProvider } from './context/loginContext';

import Navbar from "./components/navbar";

import Home from './pages/home';
import Login from './pages/login';

const App = () => {
	
	return (
		<React.Fragment>
			<LoginContextProvider>
				<Navbar />

				<Routes>
					<Route path="" element={<Login />} ></Route>
					<Route path="/home" element={<Home />} ></Route>
				</Routes>
			</LoginContextProvider>
		</React.Fragment>
	);
}

export default App;

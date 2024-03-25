import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import SignUp from './pages/signup'
import Dashboard from './pages/dashboard'
import Homepage from './pages/homepage'
// import SignUp2 from "./pages/signup-2";

function App() {
	return (
		<>
			<div>
				<Router>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/signup" element={<SignUp />} />
						{/* <Route path="/signup-2" element={<SignUp2 />} /> */}
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/homepage" element={<Homepage />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App

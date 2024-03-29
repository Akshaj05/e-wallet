import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Homepage from "./pages/homepage";
import Transfer from "./pages/transfer";
import Withdraw from "./pages/withdraw";
import Deposit from "./pages/deposit";
import Pointshop from "./pages/pointshop";
import Profile from "./pages/profile";
import Completed from "./pages/completed";
import { UserContext } from "./UserContext";
import { UserProvider } from "./UserContext";

function App() {
	const [uid, setUid] = useState(null);
	console.log(uid);
	return (
		<>
			<UserProvider>
				<div>
					<Router>
						<Routes>
							<Route path="/" element={<Login />} />
							<Route path="/signup" element={<SignUp />} />
							<Route path="/homepage" element={<Homepage />} />
							<Route path="/transfer" element={<Transfer />} />
							<Route path="/withdraw" element={<Withdraw />} />
							<Route path="/deposit" element={<Deposit />} />
							<Route path="/shop" element={<Pointshop />} />
							<Route path="/profile" element={<Profile />} />
							<Route path="/completed" element={<Completed />} />
						</Routes>
					</Router>
				</div>
			</UserProvider>
		</>
	);
}

export default App;

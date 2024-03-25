import React from "react";
import { NavLink } from "react-router-dom";
import Home1 from "../Images/home-logo-purple.svg";
import Transaction1 from "../Images/transaction-logo-purple.svg";
import Pointshop1 from "../Images/pointshop-logo-purple.svg";
import Profile1 from "../Images/profile-logo-purple.svg";

const Navbar = () => {
	return (
		<div className="flex justify-between bg-lightpurple2 px-5 py-3">
			<div className="text-white">
				<img src={Home1} className=" p-5" alt="Home"></img>
			</div>
			<div className="text-white">
				<img src={Transaction1} className=" p-5" alt="Home"></img>
			</div>
			<div className="text-white">
				<img src={Pointshop1} className=" p-5" alt="Home"></img>
			</div>
			<div className="text-white">
				<img src={Profile1} className=" p-5" alt="Home"></img>
			</div>

			{/* <div className="text-white">Transactions</div>
			<div className="text-white">Point Shop</div>
			<div className="text-white">Profile</div> */}
		</div>
	);
};

export default Navbar;

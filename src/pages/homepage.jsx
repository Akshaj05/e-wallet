import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Homepagebg from "../Images/homepage-bg.png";
import Navbar from "../components/navbar";

const Homepage = () => {
	return (
		<>
			<div className=" bg-mainbg h-screen w-screen flex flex-col gap-10">
				<div className="text-[2rem]">
					<h1 className="text-center text-white pb-2  pt-10">
						Greetings,
						<h1 className="text-center text-lightpurple pb-2 text-[2.5rem]">
							Ben Dover
						</h1>
					</h1>
				</div>
				{/* <div>
					<img
						src={Homepagebg}
						className=" h-auto w-auto overflow-clip z-10"
						alt="circle"
					></img>
				</div> */}
				<Navbar />
			</div>
		</>
	);
};

export default Homepage;

import React from "react";
import Navbar from "../components/navbar";
import Tick from "../Images/tick.svg";

const Completed = () => {
	return (
		<>
				<div className="bg-mainbg h-screen w-screen flex flex-col justify-center">
					<img src={Tick} className="h-[20rem] opacity-90 items-center"></img>

					<p className="text-white text-[2rem] items-center pl-[3rem] pt-10 pb-[8rem]">
						Transaction Complete
					</p>
					<Navbar/>
				</div>
			

		</>
	);
};

export default Completed;

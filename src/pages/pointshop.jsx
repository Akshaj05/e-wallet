import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import Netflix from "../Images/netflix.svg";
import Hotstar from "../Images/hotstar.svg";
import JioTV from "../Images/jiotv.svg";
import SonyLiv from "../Images/sonyliv.svg";
import Prime from "../Images/amazon.svg";

const Pointshop = () => {
	return (
		<>
			<div className="bg-mainbg w-screen h-screen text-white">
				<h1 className="text-center text-[2.2rem] pt-10 font-mainfont">
					Redeem Points
				</h1>
				<h1 className="text-center text-[1.2rem] pb-6 text-lightpurple ">
					Points Available: ---{" "}
				</h1>
				<div className="flex flex-col gap-7 items-center">
					<div className="w-[24rem] h-[6.5rem] bg-lightpurple2 rounded-[1.5rem] flex items-center justify-between ">
						<img
							src={Netflix}
							alt=""
							className="h-[70px] w-[70px] rounded-[1rem] ml-4"
						></img>
						<div className="">
							<h1 className="text-[1.1rem] font-medium">Netflix</h1>
							<p className="font-thin w-[10rem] text-[0.7rem] leading-5">
								Subcription will be available for 3 months
							</p>
						</div>
						<p className="mr-[2rem] text-brightpurple">200 points</p>
					</div>
					<div className="w-[24rem] h-[6.5rem] bg-lightpurple2 rounded-[1.5rem] flex items-center justify-between ">
						<img
							src={Hotstar}
							alt=""
							className="h-[70px] w-[70px] rounded-[1rem] ml-4"
						></img>
						<div className="">
							<h1 className="text-[1.1rem] font-medium">Hotstar</h1>
							<p className="font-thin w-[10rem] text-[0.7rem] leading-5">
								Subcription will be available for 3 months
							</p>
						</div>
						<p className="mr-[2rem] text-brightpurple">200 points</p>
					</div>
					<div className="w-[24rem] h-[6.5rem] bg-lightpurple2 rounded-[1.5rem] flex items-center justify-between ">
						<img
							src={JioTV}
							alt=""
							className="h-[70px] w-[70px] rounded-[1rem] ml-4"
						></img>
						<div className="">
							<h1 className="text-[1.1rem] font-medium">JioTV</h1>
							<p className="font-thin w-[10rem] text-[0.7rem] leading-5">
								Subcription will be available for 3 months
							</p>
						</div>
						<p className="mr-[2rem] text-brightpurple">200 points</p>
					</div>
					<div className="w-[24rem] h-[6.5rem] bg-lightpurple2 rounded-[1.5rem] flex items-center justify-between ">
						<img
							src={SonyLiv}
							alt=""
							className="h-[70px] w-[70px] rounded-[1rem] ml-4"
						></img>
						<div className="">
							<h1 className="text-[1.1rem] font-medium">SonyLiv</h1>
							<p className="font-thin w-[10rem] text-[0.7rem] leading-5">
								Subcription will be available for 3 months
							</p>
						</div>
						<p className="mr-[2rem] text-brightpurple">200 points</p>
					</div>
					<div className="w-[24rem] h-[6.5rem] bg-lightpurple2 rounded-[1.5rem] flex items-center justify-between ">
						<img
							src={Prime}
							alt=""
							className="h-[70px] w-[70px] rounded-[1rem] ml-4"
						></img>
						<div className="">
							<h1 className="text-[1.1rem] font-medium">Amazon Prime</h1>
							<p className="font-thin w-[10rem] text-[0.7rem] leading-5">
								Subcription will be available for 3 months
							</p>
						</div>
						<p className="mr-[2rem] text-brightpurple">200 points</p>
					</div>
				</div>
			</div>
			<Navbar />
		</>
	);
};

export default Pointshop;

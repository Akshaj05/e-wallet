import React from "react";
import Navbar from "../components/navbar";
import Profilebg from "../Images/profilebg.png";

const Profile = () => {
  return (
    <div className="bg-mainbg w-screen h-screen">
      <img
					src={Profilebg}
					className="absolute h-auto w-auto bottom-0 left-0 z-0 "
					alt="background"
				/>{" "}
        <div className="w-screen h-screen flex flex-col justify-end gap-8 items-center pb-[12rem]">
          <div className="z-10">
            <p  className=" pr-[14rem] text-white text-[1.2rem] z-10 pb-2">Your Name:</p>
            <div className="w-[22.75rem] h-[4rem] border-lightpurple border-[0.1rem]  bg-lightpurple2 rounded-[1.5rem] flex items-center justify-between z-10 relative">
            </div>
          </div>
          <div className="z-10">
            <p  className=" pr-[14rem] text-white text-[1.2rem] z-10 pb-2">Your Email:</p>
            <div className="w-[22.75rem] h-[4rem] border-lightpurple border-[0.1rem]  bg-lightpurple2 rounded-[1.5rem] flex items-center justify-between z-10 relative">
            </div>
          </div>
          <div className="z-10">
            <p  className=" pr-[14rem] text-white text-[1.2rem] z-10 pb-2">Balance:</p>
            <div className="w-[22.75rem] h-[4rem] border-lightpurple border-[0.1rem]  bg-lightpurple2 rounded-[1.5rem] flex items-center justify-between z-10 relative">
            </div>
          </div>


        </div>
        
      <Navbar />
    </div>
  );
};

export default Profile;

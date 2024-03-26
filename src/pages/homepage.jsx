import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import Homepagebg from "../Images/homepage-bg.png";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
// import firebase from "firebase/app";
import { db } from "../firebase";
import { doc as docRef, getDoc } from "firebase/firestore";

const Homepage = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const uid = location.state.uid;
  console.log(uid);
  useEffect(() => {
    const fetchUser = async () => {
      const docReference = docRef(db, "users", uid);
      const docSnapshot = await getDoc(docReference);

      if (docSnapshot.exists()) {
        setUser(docSnapshot.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchUser();
  }, [uid]);

  return (
    <>
      <div className=" bg-mainbg h-screen w-screen flex flex-col gap-10">
        <div className="text-[2rem]">
          <h1 className="text-center text-white pb-2  pt-10">
            Greetings,
            <h1 className="text-center text-lightpurple pb-2 text-[2.5rem]">
              {user ? user.username : "Loading..."}
            </h1>
          </h1>
        </div>

        {/* BALANCE */}
        <div className="text-[2rem]">
          <h1 className="text-center text-white pb-2  pt-10">
            Balance:
            <h1 className="text-center text-lightpurple pb-2 text-[2.5rem]">
              {user ? user.balance : "Loading..."}
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
        <div></div>
        <Navbar />
      </div>
    </>
  );
};

export default Homepage;

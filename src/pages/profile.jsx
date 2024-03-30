import React, { useContext, useState } from "react";
import Navbar from "../components/navbar";
import Profilebg from "../Images/profilebg.png";
import { db } from "../firebase";
import {
  doc as docRef,
  getDoc,
  getDocs,
  updateDoc,
  collection,
  query,
  where,
} from "firebase/firestore";
import { UserContext } from "../UserContext";

const Profile = () => {
  const { uid } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [balance, setBalance] = useState(0);
  const [profilepic, setProfilepic] = useState("");

  const fetchUser = async () => {
    const docReference = docRef(db, "users", uid);
    const docSnapshot = await getDoc(docReference);

    if (docSnapshot.exists()) {
      setName(docSnapshot.data().username);
      setEmail(docSnapshot.data().email);
      setBalance(docSnapshot.data().balance);
      setProfilepic(docSnapshot.data().profile_img);
    } else {
      console.log("No such document!");
    }
  };
  return (
    fetchUser(),
    (
      <div className="bg-mainbg w-screen h-screen font-regular">
        <img
          src={Profilebg}
          className="absolute h-auto w-auto bottom-0 left-0 z-0 "
          alt="background"
        />
        <div>
          <img
            src={profilepic}
            className="absolute h-[11rem] w-[11rem] top-[4.7rem] right-[7.48rem] rounded-full z-10 bg-cover object-cover"
            alt="profile"
          />
        </div>
        <div className="w-screen h-screen flex flex-col justify-end gap-8 items-center pb-[12rem] ">
          <div className="z-10">
            <p className=" pr-[14rem] text-white text-[1.2rem] z-10 pb-2">
              Your Name:
            </p>
            <div className="w-[22.75rem] text-white text-[1.2rem] px-5 opacity-60 h-[4rem] border-lightpurple border-[0.1rem]  bg-lightpurple2 rounded-[1.5rem] flex items-center justify-between z-10 relative">
              {name}
            </div>
          </div>
          <div className="z-10">
            <p className=" pr-[14rem] text-white text-[1.2rem] z-10 pb-2">
              Your Email:
            </p>
            <div className="w-[22.75rem] h-[4rem] text-white text-[1.2rem] px-5 opacity-60 border-lightpurple border-[0.1rem]  bg-lightpurple2 rounded-[1.5rem] flex items-center justify-between z-10 relative">
              {email}
            </div>
          </div>
          <div className="z-10">
            <p className=" pr-[14rem]  text-white text-[1.2rem] z-10 pb-2">
              Balance:
            </p>
            <div className="w-[22.75rem] h-[4rem] text-white text-[1.2rem] px-5 opacity-60 border-lightpurple border-[0.1rem]  bg-lightpurple2 rounded-[1.5rem] flex items-center justify-between z-10 relative">
              {balance}
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    )
  );
};

export default Profile;

import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../UserContext";
import Homepagebg from "../Images/homepage-bg.png";
import Navbar from "../components/navbar";
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

const Homepage = () => {
  const [user, setUser] = useState(null);
  const { uid } = useContext(UserContext);

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
  console.log(user);
  return (
    <>
      <div className=" bg-mainbg h-screen w-screen flex flex-col gap-10 font">
        <div className="text-[2rem]">
          <h1 className="text-center text-white pb-2  pt-10 z-10 relative">
            Greetings,
            <p className="text-center text-lightpurple pb-2 text-[2rem] z-10 relative leading-[2.5rem]">
              {user ? user.username : "Loading.."}
            </p>
            <div
              name="to position the stuff hehe ;)"
              className="h-[5.6rem] w-full bg-mainbg"
            ></div>
          </h1>
        </div>
        <div className="text-[2rem]"></div>
        <h1 className="text-center text-white pb-2  pt-10 relative z-10">
          <h1 className="text-center text-white font-regular pb-2 text-[2.2rem] relative z-10 leading-[5rem]">
            {user ? user.balance : "Loading.."}
          </h1>
        </h1>
        <div className="relative z-10 text-white">
          Transaction History:
          <ul>
            {user &&
              Array.isArray(user.transaction_history) &&
              user.transaction_history.map((transaction, index) => (
                <li key={index}>{transaction}</li>
              ))}
          </ul>
        </div>
        <img
          src={Homepagebg}
          className="absolute h-auto w-auto bottom-0 left-0 z-0 "
          alt="background"
        />
      </div>

      <Navbar />
    </>
  );
};

export default Homepage;

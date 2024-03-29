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
      <div className=" bg-mainbg w-screen flex flex-col gap-10 font ">
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
          <p className="text-center text-white font-regular pt-6 pb-2 pr-2 text-[2rem] relative z-10 leading-tight">
            ₹{user ? user.balance : "Loading.."}
          </p>
          <h1 className="text-center text-lightpurple font-regular pb-2 text-[1rem] relative z-10 leading-tight">
            Balance
          </h1>
        </h1>
        <div className="relative z-10 text-white mx-10 flex flex-col gap-5">
          <p className="text-left pt-[3.5rem] text-white font-regular text-[1.2rem] relative z-10 tracking-wide mx-0">
            My Transactions
          </p>
          <ul className="flex flex-col gap-3">
            {user &&
              Array.isArray(user.transaction_history) &&
              user.transaction_history
                .slice(-3)
                .reverse()
                .map((transaction, index) => (
                  <li
                    className="bg-mainbg w-[90vw] h-[3.3rem] rounded-2xl self-center text-white font-regular text-[1.2rem] relative z-10 flex items-center justify-center shadow-xl"
                    key={index}
                  >
                    {transaction}
                  </li>
                ))}
          </ul>
        </div>
        <img
          src={Homepagebg}
          className="absolute h-auto w-auto bottom-0 left-0 "
          alt="background"
        />{" "}
      </div>
      <Navbar />
    </>
  );
};

export default Homepage;

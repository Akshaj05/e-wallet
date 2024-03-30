import React, { useContext, useState } from "react";
import Navbar from "../components/navbar";
import Netflix from "../Images/netflix.svg";
import Hotstar from "../Images/hotstar.svg";
import JioTV from "../Images/jiotv.svg";
import SonyLiv from "../Images/sonyliv.svg";
import Prime from "../Images/amazon.svg";

import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";
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

const Pointshop = () => {
  const services = [
    { name: "Netflix", src: Netflix, points: 200 },
    { name: "Hotstar", src: Hotstar, points: 200 },
    { name: "JioTV", src: JioTV, points: 200 },
    { name: "SonyLiv", src: SonyLiv, points: 200 },
    { name: "Amazon Prime", src: Prime, points: 200 },
  ];

  const { uid: uid } = useContext(UserContext);
  const [points, setPoints] = useState(0);
  const navigate = useNavigate();

  // Fetching user points for display purposes
  const fetchUser = async () => {
    const docReference = docRef(db, "users", uid);
    const docSnapshot = await getDoc(docReference);

    if (docSnapshot.exists()) {
      setPoints(docSnapshot.data().points);
    } else {
      console.log("No such document!");
    }
  };

  //Code to redeem points
  const handleServiceClick = async (service) => {
    console.log(service);

    const userDoc = docRef(db, "users", uid);
    const userDocData = await getDoc(userDoc);
    const userPoints = Number(userDocData.data().points);

    if (userPoints < service.points) {
      alert("Insufficient Points");
      return;
    }

    const newPoints = userPoints - service.points;
    await updateDoc(userDoc, {
      points: newPoints,
    });

    alert("Subscription Redeemed");

    // Fetch current user's transaction history
    let userTransactionHistory = userDocData.data().transaction_history;
    if (!userTransactionHistory) {
      userTransactionHistory = [];
    }

    // Add new transaction to the user's history
    userTransactionHistory.push(`Redeemed ${service.name} for 200 points`);

    // Update user's transaction history in the database
    await updateDoc(userDoc, { transaction_history: userTransactionHistory });

    //Navigation to completed page and back to transfer page
    navigate("/completed");

    setTimeout(() => {
      navigate("/transfer");
    }, 3000);
  };

  return (
    fetchUser(),
    (
      <>
        <div className="bg-mainbg w-screen h-screen text-white">
          <h1 className="text-center text-[2.2rem] pt-10 font-mainfont">
            Redeem Points
          </h1>
          <h1 className="text-center text-[1.2rem] pb-6 text-lightpurple ">
            Points Available: {points}
          </h1>
          <div className="flex flex-col gap-7 items-center">
            {services.map((service) => (
              <div
                key={service.name}
                className="w-[24rem] h-[6.5rem] bg-lightpurple2 rounded-[1.5rem] flex items-center justify-between "
                onClick={() => handleServiceClick(service)}
              >
                <img
                  src={service.src}
                  alt=""
                  className="h-[70px] w-[70px] rounded-[1rem] ml-4"
                ></img>
                <div className="">
                  <h1 className="text-[1.1rem] font-medium">{service.name}</h1>
                  <p className="font-thin w-[10rem] text-[0.7rem] leading-5">
                    Subscription will be available for 3 months
                  </p>
                </div>
                <p className="mr-[2rem] text-brightpurple">
                  {service.points} points
                </p>
              </div>
            ))}
          </div>
        </div>
        <Navbar />
      </>
    )
  );
};

export default Pointshop;

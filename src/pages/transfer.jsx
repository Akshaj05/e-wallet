import React, { useContext } from "react";
import { db } from "../firebase";
import { doc as docRef, getDoc } from "firebase/firestore";
import Navbar from "../components/navbar";
import { UserContext } from "../UserContext"; // replace with the actual path to your UserContext file
const Transfer = () => {
  const uid = useContext(UserContext);
  console.log(uid);

  if (uid === null) {
    console.log("error");
  }
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Transfer;

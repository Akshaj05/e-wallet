import React from "react";
import { db } from "../firebase";
import { doc as docRef, getDoc } from "firebase/firestore";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
const Transfer = () => {
  console.log(uid);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Transfer;

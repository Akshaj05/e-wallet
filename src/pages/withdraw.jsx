import React, { useContext, useState } from "react";
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
import Navbar from "../components/navbar";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";
import Yellowcoin from "../Images/yellowcoin.png";
import { useNavigate } from "react-router-dom";
const Transfer = () => {
  const { uid: uid } = useContext(UserContext);
  const [amount, setAmount] = useState(0);
  const [email, setEmail] = useState("");
  const [pin, setPIN] = useState(0);
  const navigate = useNavigate();

  const handleTransfer = async (event) => {
    event.preventDefault();

    // Fetch current user's balance
    const userDoc = docRef(db, "users", uid);
    const userDocData = await getDoc(userDoc);
    const userBalance = Number(userDocData.data().balance);
    const userPIN = userDocData.data().pin;

    //Verify Pin
    if (pin !== userPIN) {
      alert("Invalid Pin");
      return;
    }
    // Subtract the amount from current user's balance
    const newBalance = userBalance - amount;
    if (newBalance < 0) {
      alert("Insufficient balance");
      return;
    }

    await updateDoc(userDoc, { balance: newBalance });

    // Fetch current user's transaction history
    let userTransactionHistory = userDocData.data().transaction_history;
    if (!userTransactionHistory) {
      userTransactionHistory = [];
    }

    // Add new transaction to the user's history
    userTransactionHistory.push(`Withdrawed ₹${amount} from vault`);

    // Update user's transaction history in the database
    await updateDoc(userDoc, { transaction_history: userTransactionHistory });

    console.log("Withdraw successful");

    //Navigation to completed page and back to transfer page
    navigate("/completed");

    setTimeout(() => {
      navigate("/transfer");
    }, 3000);
  };

  return (
    <div className=" h-screen w-screen bg-mainbg">
      <h1 className="text-center font- text-[2.2rem] pt-10 pb-3 font-mainfont text-white">
        Transactions
      </h1>
      <div className="flex flex-row mx-7">
        <Link
          to="/transfer"
          className="w-full h-[2.2rem]   rounded-t-2xl flex justify-center items-center text-[0.9rem] font-extralight text-white"
        >
          <div className=" ">Transfer</div>
        </Link>
        <Link
          to="/withdraw"
          className="w-full h-[2.2rem] bg-lightpurple2  rounded-t-2xl flex justify-center items-center text-[0.9rem] font-extralight text-lightblue"
        >
          <div className="">Withdraw</div>
        </Link>
        <Link
          to="/deposit"
          className="w-full h-[2.2rem]  rounded-t-2xl flex justify-center items-center text-[0.9rem] font-extralight text-white"
        >
          <div className="">Deposit</div>
        </Link>
      </div>
      <div className="w-auto h-[0.3rem] bg-mainbg mx-7 mt-[0.5rem]  flex rounded-full">
        <div className="w-1/3 h-[0.3rem] bg-lightpurple2  rounded-l-full"></div>
        <div className="w-1/3 h-[0.3rem] bg-lightblue rounded-full"></div>
        <div className="w-1/3 h-[0.3rem] bg-lightpurple2 rounded-r-full"></div>
      </div>
      <div className="flex justify-center">
        <img src={Yellowcoin} className=" items-center h-[19rem] w-auto" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className=" w-[22rem] h-auto p-7 flex flex-col items-center justify-center bg-lightpurple2 rounded-[2.5rem] shadow-lg">
          <h1 className="text-2xl  text-white">Withdraw</h1>
          <form className="flex flex-col gap-4 mt-4" onSubmit={handleTransfer}>
            <input
              className=" text-white bg-mainbg rounded-full h-[2.8rem] w-[18rem] placeholder:font-light text-[0.9rem] px-5"
              type="number"
              id="amount"
              placeholder="Enter the amount"
              onChange={(e) => setAmount(Number(e.target.value))}
            />
            <input
              className=" text-white bg-mainbg rounded-full h-[2.8rem] w-[18rem] placeholder:font-light text-[0.9rem] px-5"
              type="password"
              id="pin"
              placeholder="Enter PIN"
              onChange={(e) => setPIN(Number(e.target.value))}
            />
            <button
              type="submit "
              className=" w-auto h-[2.8rem] rounded-full text-white bg-gradient-to-r from-[#9126EF] to-[#0C6690]"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Transfer;

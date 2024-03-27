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

const Transfer = () => {
  const { uid: uid } = useContext(UserContext);
  const [amount, setAmount] = useState(0);
  const [email, setEmail] = useState("");
  console.log(typeof uid, uid);
  const handleTransfer = async (event) => {
    event.preventDefault();

    // Fetch current user's balance
    const userDoc = docRef(db, "users", uid);
    const userDocData = await getDoc(userDoc);
    const userBalance = Number(userDocData.data().balance);
    console.log(userDoc);
    // Subtract the amount from current user's balance
    const newBalance = userBalance - amount;
    if (newBalance < 0) {
      console.log("Insufficient balance");
      return;
    }
    // Fetch recipient user's UID using their email
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    let recipientUID = null;
    querySnapshot.forEach((doc) => {
      recipientUID = doc.id;
    });

    if (!recipientUID) {
      console.log("Recipient not found");
      return;
    }

    // Fetch recipient user's balance
    const recipientDoc = docRef(db, "users", recipientUID);
    const recipientDocData = await getDoc(recipientDoc);
    const recipientBalance = Number(recipientDocData.data().balance);

    // Add the amount to recipient user's balance
    const recipientNewBalance = recipientBalance + amount;

    // Update both balances in the database
    await updateDoc(userDoc, { balance: newBalance });
    await updateDoc(recipientDoc, { balance: recipientNewBalance });

    console.log("Transfer successful");
  };

  return (
    <div>
      <form onSubmit={handleTransfer}>
        <input
          type="number"
          id="amount"
          placeholder="Enter the amount"
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <input
          type="email"
          id="email"
          placeholder="Enter the recipient's email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Transfer</button>
      </form>
      <Navbar />
    </div>
  );
};

export default Transfer;

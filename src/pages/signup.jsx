import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase.js";
import Img1 from "../Images/signup-img.svg";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState(0);
  const [balance, setBalance] = useState(0);
  const points = 0;

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
        // Add data to Firestore
        await AddData(user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // Set the input box border color to red
        document.getElementById("emailInput").style.borderColor = "red";
        document.getElementById("passwordInput").style.borderColor = "red";
        // Show the error message in a popup box
        alert(errorMessage);
      });
  };

  async function AddData(userId) {
    const user = {
      username,
      email,
      pin: Number(pin),
      balance: Number(balance),
      points: Number(points),
    };
    await setDoc(doc(db, "users", userId), user);
    console.log("User data added to Firestore");
    const docSnap = await getDoc(doc(db, "users", userId));
    if (docSnap.exists()) {
      console.log("User data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  }

  return (
    <>
      <div
        name="container"
        className="w-screen h-screen bg-[#19183E] flex flex-col relative justify-end content-end text-white font-sans "
      >
        <img
          src={Img1}
          className="h-[20rem] w-[20rem] mx-auto opacity-90"
        ></img>
        <div className=" bg-[#28284C] h-auto w-full lg:w-1/4 p-[2.2rem]  rounded-t-[3rem] font-mainFont">
          <form action="" name="myForm" className="flex flex-col gap-[1.5rem]">
            <div className="text-[2rem]">
              <h1 className="text-center text-white pb-2  ">SignUp</h1>
            </div>
            <div>
              <input
                type="text"
                name="text"
                id="text"
                placeholder=" Username"
                onChange={(e) => setUsername(e.target.value)}
                required
                className=" bg-transparent border-[0.1rem] border-white rounded-full h-[3rem] w-full placeholder:pl-[1.5rem] placeholder:text-[#E5E4E4]"
              ></input>
            </div>

            <div>
              <input
                type="email-address"
                name="email"
                id="emailInput"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className=" bg-transparent border-[0.1rem] border-white rounded-full h-[3rem] w-full placeholder:pl-[1.5rem] placeholder:text-[#E5E4E4]"
              ></input>
            </div>

            <div>
              <input
                type="password"
                name="password"
                id="passwordInput"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                required
                className=" bg-transparent border-[0.1rem] border-white rounded-full h-[3rem] w-full placeholder:pl-[1.5rem] placeholder:text-[#E5E4E4]"
              ></input>
            </div>

            <div>
              <input
                type="password"
                name="pin"
                id="pin"
                placeholder=" Enter Transaction Pin"
                onChange={(e) => setPin(e.target.value)}
                required
                className=" bg-transparent border-[0.1rem] border-white rounded-full h-[3rem] w-full placeholder:pl-[1.5rem] placeholder:text-[#E5E4E4]"
              ></input>
            </div>

            <div>
              <input
                type="number"
                name="balance"
                id="balance"
                placeholder=" Enter Balance"
                onChange={(e) => setBalance(e.target.value)}
                required
                className=" bg-transparent border-[0.1rem] border-white rounded-full h-[3rem] w-full placeholder:pl-[1.5rem] placeholder:text-[#E5E4E4]"
              ></input>
            </div>

            <div className="flex flex-col gap-[1rem]">
              <Link to="/signup">
                <button
                  className="bg-white text-black font-normal rounded-full h-[3rem] w-full"
                  onClick={onSubmit}
                >
                  Next
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;

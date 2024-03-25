import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase.js";
// import Img1 from "../Images/signup-img.svg";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const [balance, setBalance] = useState(0);

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
        // ...
        AddData();
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

  async function AddData() {
    const user = {
      username,
      email,
      phone,
      pin,
      balance,
    };
    await setDoc(doc(db, "users", ""), user);
  }

  const handleGoogle = () => {
    // handle Google logic here
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  return (
    <>
      <div
        name="container"
        className="w-screen h-screen bg-[#19183E] flex flex-col relative justify-end content-end text-white font-sans "
      >
        {/* <img
          src={Img1}
          className="h-[20rem] w-[20rem] mx-auto opacity-90"
        ></img> */}
        <div className=" bg-[#28284C] h-auto w-full lg:w-1/4 p-[2.2rem]  rounded-t-[3rem] font-mainFont">
          <form action="" name="myForm" className="flex flex-col gap-[1.5rem]">
            <div className="text-[2rem]">
              <h1 className="text-center text-white pb-2  ">SignUp</h1>
            </div>
            <button
              onClick={handleGoogle}
              className="w-[75vw] py-5 text-xl bg-blue-600 text-white mx-auto"
            >
              Sign In with Google
            </button>

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
                type="number"
                name="phone_num"
                id="phone_num"
                placeholder=" Enter Phone Number"
                onChange={(e) => setPhone(e.target.value)}
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
                type="password"
                name="pin"
                id="pin"
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

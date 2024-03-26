import React, { useState } from "react";
import Img2 from "../Images/login-img.svg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./components/UserContext";
import { useContext } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUid } = useContext(UserContext);

  const onSubmit = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        let uid = user.uid; // This is the user's uid
        console.log(uid);
        setUid(uid);
        navigate("/homepage", { state: { uid: uid } });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // Set the input box border color to red
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("password").style.borderColor = "red";
        // Show the error message in a popup box
        alert(errorMessage);
      });
  };
  return (
    <>
      <div
        name="container"
        className="w-screen h-screen bg-[#19183E] flex flex-col relative justify-end gap-10 content-end text-white font-sans "
      >
        <img src={Img2} className="h-[17rem] mx-auto opacity-90"></img>
        <div className=" bg-[#28284C] h-auto w-full lg:w-1/4 p-[2.2rem]  rounded-t-[3rem] font-mainFont">
          <form action="" name="myForm" className="flex flex-col gap-[1.5rem]">
            <div className="text-[2rem]">
              <h1 className="text-center text-white pb-2  ">Login</h1>
            </div>
            <div>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className=" bg-transparent border-[0.1rem] border-white rounded-full h-[3rem] w-full placeholder:pl-[1.5rem] placeholder:text-[#E5E4E4]"
              ></input>
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className=" bg-transparent border-[0.1rem] border-white rounded-full h-[3rem] w-full placeholder:pl-[1.5rem] placeholder:text-[#E5E4E4]"
              ></input>
            </div>
            <div className="flex flex-col gap-[1rem]">
              <button
                type="submit"
                onClick={onSubmit}
                className="bg-white text-black font-normal rounded-full h-[3rem] w-full"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

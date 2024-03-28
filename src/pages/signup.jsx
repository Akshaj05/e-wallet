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
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState(0);
  const [balance, setBalance] = useState(0);
  const [profileImg, setProfileImg] = useState(null);
  const points = 0;
  const transaction_history = [];
  const storage = getStorage();

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
    const storageRef = ref(storage, `profile_images/${userId}`);
    const uploadTask = uploadBytesResumable(storageRef, profileImg);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Handle the upload progress
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          // Add the download URL to the user object
          user.profile_img = downloadURL;
          // Then save the user object to Firestore
          setDoc(doc(db, "users", userId), user);
        });
      }
    );

    const user = {
      username,
      email,
      pin: Number(pin),
      balance: Number(balance),
      points: Number(points),
      transaction_history,
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
					className="h-[15rem] w-[20rem] mx-auto opacity-90"
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
								className=" bg-transparent border-[0.1rem] border-white rounded-full h-[3rem] w-full  px-5 placeholder:text-[#E5E4E4]"
							></input>
						</div>

						<div>
							<input
								type="email-address"
								name="email"
								id="emailInput"
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Enter Email"
								className=" bg-transparent border-[0.1rem] border-white rounded-full h-[3rem] w-full  px-5 placeholder:text-[#E5E4E4]"
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
								className=" bg-transparent border-[0.1rem] border-white rounded-full h-[3rem] w-full  px-5 placeholder:text-[#E5E4E4]"
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
								className=" bg-transparent border-[0.1rem] border-white rounded-full h-[3rem] w-full  px-5 placeholder:text-[#E5E4E4]"
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
								className=" bg-transparent border-[0.1rem] border-white rounded-full h-[3rem] w-full  px-5 placeholder:text-[#E5E4E4]"
							></input>
						</div>

						<div>
							<input
								type="file"
								name="profile_img"
								id="profile_img"
								placeholder="Upload Profile Picture"
								onChange={(e) => setProfileImg(e.target.files[0])}
								className=" hidden"
							></input>
							<label htmlFor="profile_img" className=" border-b-2">
								Upload Profile Picture
							</label>
						</div>

						<div className="flex flex-col gap-[1rem]">
							<Link to="/signup">
								<button
									className="bg-white text-mainbg font-normal rounded-full h-[3rem] w-full"
									onClick={onSubmit}
								>
									Submit
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

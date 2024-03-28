// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6nCpyDw3D6JiYAnWCT7WlGlb-VSStAyk",
  authDomain: "e-wallet-48fe5.firebaseapp.com",
  projectId: "e-wallet-48fe5",
  storageBucket: "e-wallet-48fe5.appspot.com",
  messagingSenderId: "1030063355530",
  appId: "1:1030063355530:web:a535fcab651fc0b230df73",
  measurementId: "G-BSX363V0M2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app);
export { storage };
export { db };
export { auth };

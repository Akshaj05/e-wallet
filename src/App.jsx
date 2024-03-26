import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Homepage from "./pages/homepage";
// import SignUp2 from "./pages/signup-2";
import Transfer from "./pages/transfer";
import { UserContext } from "./UserContext";
import { UserProvider } from "./UserContext";

function App() {
  const [uid, setUid] = useState(null);
  console.log(uid);
  return (
    <>
      <UserProvider>
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              {/* <Route path="/signup-2" element={<SignUp2 />} /> */}
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/transfer" element={<Transfer />} />
            </Routes>
          </Router>
        </div>
      </UserProvider>
    </>
  );
}

export default App;

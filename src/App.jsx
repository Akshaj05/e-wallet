import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import SignUp from './pages/signup'
import Dashboard from './pages/dashboard'

function App() {

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App

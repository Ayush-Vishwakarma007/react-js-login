import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import SignUpForm from "./auth/SignUp";
import Dashboard  from "./dashboard/dashboard";
import Home from "./home/home";

export default function App() {
  return (    
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<SignUpForm />}></Route>
          <Route path="/signup" element={<SignUpForm />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

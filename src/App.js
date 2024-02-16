import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import Dashboard  from "./dashboard/dashboard";
import Home from "./home/home";

export default function App() {
  return (    
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Home />}></Route>
          <Route path="/signup" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

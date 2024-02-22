
import React from "react";
import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import  Navigation  from "./dashboard/company/Navigation";
// import  Footer  from "./dashboard/company/Footer";
import  Home  from "./dashboard/company/Home";
import  Search  from "./dashboard/company/Search";
import  Project  from "./dashboard/company/Project";
import  Profile  from "./dashboard/company/Profile";
import  AboutUs  from "./dashboard/company/AboutUs";
import  Contact  from "./dashboard/company/Contact";

import  Vol_Home  from "./dashboard/company/Home";
import  Vol_Search  from "./dashboard/company/Search";
import  Vol_Project  from "./dashboard/company/Project";
import  Vol_Profile  from "./dashboard/company/Profile";
import  Vol_AboutUs  from "./dashboard/company/AboutUs";
import  Vol_Contact  from "./dashboard/company/Contact";
import Protected from './guard/protected';
import SignInProtected from './guard/signupProtected'
import HomeMain from './home/home'
const container = document.getElementById('root');
const root = createRoot(container);     

root.render(
  <Router>
     <Routes>
      <Route path="/signup" element={<SignInProtected Component={HomeMain} />} />
      <Route path='/' element={< Protected Component={Home}/>}/>
      <Route path="/home" element={< Protected Component={Home}/>} />
      <Route path="/search" element={< Protected Component={Search}/>} />
      <Route path="/aboutus" element={< Protected Component={AboutUs}/>} />
      <Route path="/project" element={< Protected Component={Project}/>} />
      <Route path="/contact" element={< Protected Component={Contact}/>} />
      <Route path="/profile" element={< Protected Component={Profile}/>} />

      <Route path='/' element={< Protected Component={Vol_Home}/>}/>
      <Route path="/vol-home" element={< Protected Component={Vol_Home}/>} />
      <Route path="/vol-search" element={< Protected Component={Vol_Search}/>} />
      <Route path="/col-aboutus" element={< Protected Component={Vol_AboutUs}/>} />
      <Route path="/vol-project" element={< Protected Component={Vol_Project}/>} />
      <Route path="/vol-contact" element={< Protected Component={Vol_Contact}/>} />
      <Route path="/vol-profile" element={< Protected Component={Vol_Profile}/>} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
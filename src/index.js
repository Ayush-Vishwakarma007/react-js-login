
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

import  Vol_Home  from "./dashboard/volunteer/VolHome";
import  Vol_Search  from "./dashboard/volunteer/Search";
import  Vol_Project  from "./dashboard/volunteer/VolProject";
import  Vol_Profile  from "./dashboard/volunteer/VolProfile";
import  Vol_AboutUs  from "./dashboard/volunteer/VolAboutUs";
import  Vol_Contact  from "./dashboard/volunteer/VolContact";
import Protected from './guard/protected';
import SignInProtected from './guard/signupProtected'
import VolProtected from './guard/volProtected'
import HomeMain from './home/home'
const container = document.getElementById('root');
const root = createRoot(container);     

root.render(
  <Router>
     <Routes>
      <Route path="/signup" element={<SignInProtected Component={HomeMain} />} />
      <Route path='/' element={< Protected Component={Home}/>}/>
      <Route path="/com-home" element={< Protected Component={Home}/>} />
      <Route path="/com-search" element={< Protected Component={Search}/>} />
      <Route path="/com-aboutus" element={< Protected Component={AboutUs}/>} />
      <Route path="/com-project" element={< Protected Component={Project}/>} />
      <Route path="/com-contact" element={< Protected Component={Contact}/>} />
      <Route path="/com-profile" element={< Protected Component={Profile}/>} />

      <Route path='/' element={< VolProtected Component={Vol_Home}/>}/>
      <Route path="/vol-home" element={< VolProtected Component={Vol_Home}/>} />
      <Route path="/vol-search" element={< VolProtected Component={Vol_Search}/>} />
      <Route path="/vol-aboutus" element={< VolProtected Component={Vol_AboutUs}/>} />
      <Route path="/vol-project" element={< VolProtected Component={Vol_Project}/>} />
      <Route path="/vol-contact" element={< VolProtected Component={Vol_Contact}/>} />
      <Route path="/vol-profile" element={< VolProtected Component={Vol_Profile}/>} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
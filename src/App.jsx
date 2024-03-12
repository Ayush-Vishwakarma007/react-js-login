// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Company from "./dashboard/company/Search"
// import  Navigation from "./dashboard/company/Navigation";
// import  Footer  from "./dashboard/company/Footer";
// // import { Home } from "./dashboard/company/Home";
// import  Project  from "./dashboard/company/Project";
// import  Profile  from "./dashboard/company/Profile";
// import  AboutUs  from "./dashboard/company/AboutUs";
// import  Contact  from "./dashboard/company/Contact";
// import Home from "./home/home";
// import logo from './logo.svg';


// export default function App() {
//   return (    
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/login" element={<Home />}></Route>
//           <Route path="/signup" element={<Home />}></Route>
//           <Route path="/" element={<Home />} />
//           <Route path="/company/dashboard" element={<Company />}></Route>
//           <Route path="/aboutus" element={<AboutUs />} />
//           <Route path="/project" element={<Project />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/profile" element={<Profile />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

/* eslint-disable no-unused-vars */
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  EditButton,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users" list={ListGuesser} />
    <EditButton />
  </Admin>
);


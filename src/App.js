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


import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

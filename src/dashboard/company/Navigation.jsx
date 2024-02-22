import React from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import user_icon from '../../assets/icon.png';


function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div><img src={user_icon} alt="" width={30} /></div>
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Local Volunteering Hub
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only"></span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/search">
                  Search
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/project">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/aboutus">
                  About Us
                </NavLink>
              </li>
                <div>
                <NavLink className="nav-link" to="/profile">
                    <CgProfile size="30px" color="white"/>
                </NavLink>
                </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
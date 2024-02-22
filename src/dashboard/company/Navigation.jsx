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
          <NavLink className="navbar-brand" to="/com-home">
            Local Volunteering Hub
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/com-home">
                  Home
                  <span className="sr-only"></span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/com-search">
                  Search
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/com-project">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/com-aboutus">
                  About Us
                </NavLink>
              </li>
                <div>
                <NavLink className="nav-link" to="/com-profile">
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
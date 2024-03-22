import React from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import user_icon from '../../assets/icon.png';

function Navigation() {
  const userDetail = JSON.parse(localStorage.getItem('userDetail'));
  const isAdmin = userDetail && userDetail.role === 'ADMIN';

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
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/com-search">
                  Volunteers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/my-posted-events">
                  My Posted Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/com-aboutus">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/post-event">
                  Post Job/event
                </NavLink>
              </li>
              {isAdmin && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/dashboard">
                    Dashboard
                  </NavLink>
                </li>
              )}
              <li className="nav-item">
                <NavLink className="nav-link" to="/com-profile">
                  <CgProfile size="30px" color="white" />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;

import React from 'react';
import { NavLink } from "react-router-dom";

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px 0',
};

const sectionStyle = {
  width: '30%',
  padding: '0 20px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={sectionStyle}>
          <h3>About Us</h3>
          <p>Our platform serves as a bridge between volunteers and local organizations, making it easier than ever to find and participate in projects that make a difference. </p>
        </div>
        <div style={sectionStyle}>
          <h3>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
          <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/aboutus">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <h3>Contact Us</h3>
          <p>
            Address: 123 Main Street, City, Country <br />
            Phone: +1234567890 <br />
            Email: example@example.com
          </p>
        </div>
      </div>
      <div style={{ backgroundColor: '#222', padding: '10px 0', textAlign: 'center' }}>
        &copy; 2024 Local Volunteering Hub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

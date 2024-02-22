import React from 'react';
import './Contact.css'; // Import the CSS file for styling
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";


function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <div className="map">
          {/* Include your map component here */}
          <iframe
            title="Google Map"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9362580992215!2d72.55654427370315!3d23.026112516199117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f07cf71307%3A0x804503470ffe80ea!2sGLS%20(Gujarat%20Law%20Society)%20University!5e0!3m2!1sen!2sin!4v1708453587415!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>        </div>
        <div className="details">
          <p><strong>Address:</strong> 123 Main Street, Cityville, State, Zip</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Email:</strong> info@example.com</p>
          {/* Add more contact details as needed */}
        </div>
        <div className="social-media">
          <h3>Connect With Us</h3>
          <ul>
            <li><a href="https://www.facebook.com"><FaFacebook/></a></li>
            <li><a href="https://www.twitter.com"><AiFillTwitterCircle/></a></li>
            <li><a href="https://www.instagram.com"><FaInstagram/></a></li>
            {/* Add more social media icons and links as needed */}
          </ul>
        </div>
      </div>
      <div className="info-request-form">
        <h2>Request Information</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <textarea placeholder="Message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

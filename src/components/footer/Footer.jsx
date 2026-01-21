import React from "react";
import "./Footer.css";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo.png";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Section */}
        <div className="footer-col">
          <img src={logo} alt="AumAI" className="footer-logo" />
          <p>123-456-7890</p>
          <p>Info@aumneai.com</p>
          <p>India</p>
          <p>Bangalore</p>
        </div>

        {/* Menu Section */}
        <div className="footer-col">
           <ul className="footer-menu">
                <li>Solutions</li>
                <li>Vision</li>
                <li>Programs</li>
                <li>Blog</li>
           </ul>
          <button className="footer-btn">Get Started</button>
        </div>

        {/* Newsletter Section */}
        <div className="footer-col">
          <h4>Subscribe to Our Newsletter</h4>
          <label>Email*</label>
          <input type="email" placeholder="" />
          <div className="checkbox">
            <input type="checkbox" />
            <span>Yes, subscribe me newsletter.</span>
          </div>
          <button className="submit-btn">Submit</button>
        </div>

        {/* Social Section */}
        <div className="footer-col">
          <h4>Follow Us On:</h4>
          <div className="social-icons">
            <FaLinkedinIn/>
            <FaFacebookF />
            <FaTwitter />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./Footer.css";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <h2>Ejaz Ahmad</h2>
          <p>
            Building simple, useful, and scalable web applications.
            Let’s connect and create something amazing!
          </p>

          <div className="footer-socials">
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2025 Ejaz Ahmad. All rights reserved.</p>
        <span>Developed by Ejaz Ahmad</span>
      </div>
    </footer>
  );
};

export default Footer;

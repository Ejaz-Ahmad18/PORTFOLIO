import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import "./Contacts.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
    <div className="contact-heading">
    <span className="contact-bg-text">CONTACT</span>
    <h2>CONTACT</h2>
    <div className="contact-underline"></div>
  </div>
      <div className="contact-wrapper">
        {/* LEFT */}
        <div className="contact-left">
          <h2>Get in Touch</h2>
          <p>
            I’d love to hear from you! Whether it’s a project inquiry, a
            question, or just to say hi, feel free to reach out.
          </p>

          <div className="contact-box">
            <FaPhoneAlt />
            <span>+91 8877372425</span>
          </div>

          <div className="contact-box">
            <FaEnvelope />
            <span>ejazahmadbh18@gmail.com</span>
          </div>

          <div className="contact-socials">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <p className="form-text">
            Fill out the form below and I’ll get back to you as soon as possible.
          </p>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

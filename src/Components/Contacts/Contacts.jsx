import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Contacts.css"; // ← custom CSS file

function Contact () {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "ejaj101112@gmail.com",
      href: "mailto:ejaj101112@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      label: "Phone",
      value: "+91 7488155876",
      href: "tel:+917488155876",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Katihar, Bihar, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/ejaz18",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ejaz-ahmad-74a002298/",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      href: "https://www.instagram.com/its_ejaj.18/",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
           <div className="contact-header">
       
  <div class="contact-title">
    <span class="bg-text">CONTACTS</span>
    <h2>GET IN TOUCH</h2>
    <div class="underline"></div>
  </div>
  </div>

        <div className="contact-card">
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <a key={index} href={info.href} className="info-item">
                <div className="info-icon">{info.icon}</div>
                <div>
                  <p className="info-label">{info.label}</p>
                  <p className="info-value">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="contact-message">
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a href="mailto:ejaj101112@gmail.com" className="contact-btn">Send Me an Email</a>
          </div>

          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact
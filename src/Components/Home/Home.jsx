import React from "react";
import "./Home.css";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { FiArrowDown } from "react-icons/fi";

const Home = () => {
  return (
    <section id="home" className="home">
      {/* Background orbs */}
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>

      <div className="content">
        <p className="intro">Hello, I'm</p>
        <h1 className="name">Ejaz Ahmad</h1>
        <p className="role">Frontend Developer</p>

        <p className="description">
          Crafting seamless digital experiences with clean code and pixel-perfect designs.
          Specializing in React and React Native with 3+ years of experience.
        </p>

        <div className="buttons">
          <a href="/contact" className="btn primary">Get in Touch</a>
          <a href="/projects" className="btn secondary">View Projects</a>
        </div>

        <div className="socials">
          <a href="https://github.com/ejaz18" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ejaz-ahmad-74a002298/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/its_ejaj.18/" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="mailto:ejaj101112@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <a href="/about" className="scroll-down">
          <FiArrowDown />
        </a>
      </div>
    </section>
  );
};

export default Home;

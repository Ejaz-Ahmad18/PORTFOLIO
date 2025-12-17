import React from "react";
import "./About.css";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-section">
      {/* Section Heading */}
      <div className="about-heading">
        <span className="bg-text">ABOUT ME</span>
        <h2>ABOUT ME</h2>
        <div className="underline"></div>
      </div>

      {/* Card */}
      <div className="about-card">
        {/* Left Image */}
        <div className="about-left">
          <div className="image-wrapper">
            <div className="circle-bg"></div>
            <img
              src="https://images.unsplash.com/photo-1615109398623-88346a601842"
              alt="profile"
            />
          </div>

          <div className="social-pill">
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Right Content */}
        <div className="about-right">
          <h3>About Me</h3>
          <p className="intro">
            I'm Ejaz Ahmad, a passionate web developer crafting modern and
            responsive websites.
          </p>

          <p>
            I specialize in React, JavaScript, and frontend development.
            Through academic learning and hands-on experience, I’ve developed
            the skills to build clean, scalable, and user-focused applications.
          </p>

          <p>
            For me, development is about blending creativity and precision to
            deliver solutions that are not only functional but also visually
            stunning.
          </p>

          <div className="about-buttons">
            <button className="btn outline">Read More</button>
            <button className="btn filled">Download CV</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

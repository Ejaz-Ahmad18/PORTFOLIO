import React from "react";
import "./About.css";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";

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
            <a href="https://www.linkedin.com/in/ejaz-ahmad18/"target="_blank"
  rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://github.com/ejaz-ahmad18"target="_blank"
  rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://x.com/iamejaz"target="_blank"
  rel="noopener noreferrer"><FaTwitter /></a>
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
<a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn outline"
>
  <FaRegFilePdf className="pdf" />
  <span>Download CV</span>
</a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import "./About.css";
import { FaCode, FaPalette, FaBolt } from "react-icons/fa";

const About = () => {
  const features = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      description: "Writing maintainable and efficient code following best practices.",
    },
    {
      icon: <FaPalette />,
      title: "Pixel Perfect",
      description: "Creating visually stunning interfaces with attention to detail.",
    },
    {
      icon: <FaBolt />,
      title: "Performance",
      description: "Building fast and responsive applications for optimal UX.",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <p className="about-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-image-container">
            <div className="image-glow"></div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=1000&fit=crop"
              alt="Ejaz Ahmad"
              className="about-image"
            />
          </div>

          <div className="about-text">
            <h3>Hi, I'm Ejaz Ahmad</h3>
            <p>
              I'm a passionate Frontend Developer specializing in React and React Native.
              With over 3 years of experience, I create seamless digital experiences that
              combine beautiful design with clean, efficient code.
            </p>
            <p>
              My focus is on building intuitive, responsive, and visually engaging interfaces
              that bring designs to life with precision. I combine technical skills with creativity
              to ensure every interaction feels smooth and every pixel is perfectly placed.
            </p>
          </div>
        </div>

        <div className="features">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./Projects.css";

function Projects (){
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with React, featuring real-time inventory management and seamless checkout experience.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      tags: ["React", "TypeScript", "Styled Components"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management app with drag-and-drop functionality and real-time updates.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      tags: ["React", "Redux", "Node.js"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather dashboard with real-time data visualization and location-based forecasts.",
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
      tags: ["React", "API Integration", "Charts"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio CMS",
      description:
        "Content management system for creating and managing portfolio websites with ease.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["React", "Firebase", "Material UI"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
     
       <div className="projects-header">
       
  <div class="projects-title">
    <span class="bg-text">MYPROJECTS</span>
    <h2>PROJECTS</h2>
    <div class="underline"></div>
  </div>
  </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn gradient-btn"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn outline-btn"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

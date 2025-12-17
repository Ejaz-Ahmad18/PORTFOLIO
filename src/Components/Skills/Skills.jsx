import React from "react";
import "./Skills.css";
import { FaFigma, FaGitAlt, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";;

function Skills (){
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90, icon: <FaReact /> },
        { name: "React Native", level: 85, icon: <FaReact /> },
        { name: "JavaScript", level: 88, icon: <FaJs /> },
        { name: "TypeScript", level: 80, icon: <SiTypescript /> },
        { name: "HTML/CSS", level: 95, icon: <FaHtml5 /> },
        { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss /> },
      ],
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git", level: 85, icon: <FaGitAlt /> },
        { name: "GitHub", level: 85, icon: <FaGithub /> },
        { name: "VS Code", level: 90, icon: <DiVisualstudio /> },
        { name: "Figma", level: 75, icon: <FaFigma /> },
        { name: "Vite", level: 80, icon: <SiVite /> },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
       
  <div class="skills-title">
    <span class="bg-text">MY SKILLS</span>
    <h2>MY SKILLS</h2>
    <div class="underline"></div>
  </div>


        </div>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div className="skills-card" key={idx}>
              <h3 className="skills-category">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

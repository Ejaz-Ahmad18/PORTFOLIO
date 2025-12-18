import React from "react";
import "./Skills.css";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiVite, SiCss3 } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        {/* Heading */}
        <div className="skills-title">
          <span className="bg-text"> MYSKILLS</span>
          <h2>SKILLS</h2>
          <div className="underline"></div>
        </div>

        {/* Cards */}
        <div className="skills-grid">

          {/* Frontend */}
          <div className="skills-card">
            <h3>Frontend</h3>
            <Skill name="HTML" icon={<FaHtml5 />} level="95%" />
            <Skill name="CSS3" icon={<SiCss3 />} level="90%" />
                      <Skill name="JavaScript" icon={<FaJs />} level="88%" />
            <Skill name="React" icon={<FaReact />} level="90%" />
            {/* <Skill name="React Native" icon={<FaReact />} level="85%" /> */}
            {/* <Skill name="TypeScript" icon={<SiTypescript />} level="80%" /> */}
            <Skill name="Tailwind CSS" icon={<SiTailwindcss />} level="90%" />
          </div>

          {/* Tools */}
          <div className="skills-card">
            <h3>Tools & Platforms</h3>

            <Skill name="Git" icon={<FaGitAlt />} level="85%" />
            <Skill name="GitHub" icon={<FaGithub />} level="85%" />
            <Skill name="VS Code" icon={<DiVisualstudio />} level="90%" />
            <Skill name="Figma" icon={<FaFigma />} level="75%" />
            <Skill name="Vite" icon={<SiVite />} level="80%" />
          </div>

        </div>
      </div>
    </section>
  );
};

const Skill = ({ name, icon, level }) => {
  return (
    <div className="skill-row">
      <div className="skill-top">
        <div className="skill-left">
          <span className="skill-icon">{icon}</span>
          <span className="skill-name">{name}</span>
        </div>
        <span className="skill-percent">{level}</span>
      </div>

      <div className="skill-bar">
        <div className="skill-fill" style={{ width: level }}></div>
      </div>
    </div>
  );
};

export default Skills;

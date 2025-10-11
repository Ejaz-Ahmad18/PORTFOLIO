import React from "react";
import "./Educations.css";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  const educationData = [
    {
      title: "Marwari Inter College, Katihar, Bihar",
      degree: "ISC (XII), Science with Maths",
      duration: "Apr 2020 - Apr 2021",
      grade: "Grade: 62%",
      description:
        "I completed my class 12 high school education at Marwari Inter College, Katihar, where I studied Science with Maths.",
    },
    {
      title: "Dev Bhoomi Uttarakhand University, Dehradun",
      degree: "Bachelor of Computer Applications (BCA)",
      duration: "Apr 2021 - Apr 2024",
      grade: "Grade: 70%",
      description:
        "I have completed BCA with a focus on Front-end web development, gaining practical skills in designing and developing user-friendly web interfaces. I am eager to apply my knowledge in building engaging applications.",
    },
  ];

  return (
    <section id="education" className="education-section">
      <h2 className="education-title gradient-text">Education</h2>

      <div className="timeline">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="timeline-icon">
              <FaGraduationCap size={20} />
            </div>
            <div className="timeline-content glass-card">
              <h3>{edu.title}</h3>
              <p className="degree">{edu.degree}</p>
              <p className="duration">{edu.duration}</p>
              <p className="grade">{edu.grade}</p>
              <p className="description">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;

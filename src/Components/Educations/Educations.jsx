import React from "react";
import "./Educations.css";

const Education = () => {
  const educationData = [
    {
      title: "BCA (Bachelor of Computer Applications)",
      institute: "Baba Mastnath University (BMU)",
      year: "2022 - 2025",
      desc: "Focused on software development, web technologies, and programming.",
    },
    {
      title: "Intermediate",
      institute: "New Dish Public School, Rohtak",
      year: "2021 - 2022",
      desc: "Completed higher secondary education with good academic performance.",
    },
    {
      title: "Matriculation",
      institute: "Sr Century Public School, Bahadurgarh",
      year: "2019 - 2020",
      desc: "Completed secondary education with good academic performance.",
    },
  ];

  return (
    <section className="education-section" id="education">

  <div className="education-header">
    <span className="education-bg-text">EDUCATION</span>
    <h2 className="education-title">EDUCATION</h2>
    <div className="education-underline"></div>
  </div>

  <div className="edu-timeline">
    {educationData.map((item, index) => (
      <div
        key={index}
        className={`edu-item ${index % 2 === 0 ? "left" : "right"}`}
      >
        <span className="edu-dot"></span>

        <div className="edu-card">
          <h3>{item.title}</h3>
          <h4>{item.institute}</h4>
          <span className="edu-year">{item.year}</span>
          <p>{item.desc}</p>
        </div>
      </div>
    ))}
  </div>

</section>

  );
};

export default Education;

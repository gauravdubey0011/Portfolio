import React from "react";
import "./SkillStyles.css";
 

const Skills = () => {
  const skillList = [
    "Java",
    "C",
    "SQL",
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Next.js",
    "Git",
    "Node.js",
    "OOPs",
    "MongoDB",
    "Python",
    "Pandas"
  ];

  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillList.map((skill, index) => (
          <span className="skill-tag" key={index}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;

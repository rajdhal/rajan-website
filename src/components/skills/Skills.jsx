import React from "react";
import "./skills.css";
import Languages from "./Languages";
import Frameworks from "./Frameworks";
import Databases from "./Databases";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title reveal">Skills</h2>
      <span className="section_subtitle reveal">My Technical Skill Set</span>
      <div className="skills_container container grid">
        <div className="reveal-left"><Languages /></div>
        <div className="reveal-right"><Frameworks /></div>
        <div className="reveal-left"><Databases /></div>
      </div>
    </section>
  );
};

export default Skills;

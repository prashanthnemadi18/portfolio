import React from 'react';
import { skillsData } from '../data/skillsData';
import './Skills.css';

const Skills: React.FC = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-label">Skills</div>
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-wrapper">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-group">
              <h3>{skill.category}</h3>
              <div className="tag-list">
                {skill.items.map((item, idx) => (
                  <span key={idx}>{item}</span>
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

import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="section section-alt" id="about">
      <div className="container about-grid">
        <div>
          <div className="section-label">About Me</div>
        </div>
        <div className="about-content">
          <h2>Turning real-world problems into intelligent, working solutions.</h2>
          <p>
            I'm an AI Engineer & Full-Stack Developer who loves building things that matter. 
            Over the past few years, I've built 8+ production-ready AI applications using Python, 
            React, Flask, Spring Boot, and Google Gemini AI — spanning agriculture, education, 
            legal tech, and HR recruitment.
          </p>
          <p>
            Beyond coding, I've led teams at national and state-level hackathons, published a 
            research paper in IJIRT (Impact Factor 8.017), and secured a software development 
            internship — all while maintaining a CGPA of 8.1.
          </p>
          <p>
            I'm currently open to full-time roles, internships, and freelance collaborations. 
            If you have a problem worth solving, let's build something great together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

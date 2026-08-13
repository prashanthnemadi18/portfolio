import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-photo">
          <img src={process.env.PUBLIC_URL + "/prashanth.jpeg"} alt="Prashanth Nemadi" />
        </div>
        <div className="hero-content">
          <div className="hero-tag">Available for opportunities</div>
          <h1>Prashanth Nemadi</h1>
          <div className="hero-role">Software Engineer | Full-Stack Developer | AI Engineer</div>
          <p className="hero-desc">
            B.E. Computer Science & Engineering graduate (2022–2026) from Bahubali College of Engineering, Shravanabelagola. 
            Fresher Software Engineer with hands-on experience in AI-powered and full-stack application development. Currently seeking Software Engineer, Full-Stack Developer, and AI/ML opportunities.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-ghost">Get in Touch</a>
            <a href={`${process.env.PUBLIC_URL}/prashanth-nemadi-software-developer-full-stack-ai.pdf`} className="btn btn-ghost" onClick={(e) => { e.preventDefault(); window.open(`${process.env.PUBLIC_URL}/prashanth-nemadi-software-developer-full-stack-ai.pdf`, '_blank'); }}>
              Resume ↗
            </a>
          </div>
          <div className="hero-socials">
            <span className="social-item">
              <i className="fa-solid fa-envelope"></i> prashanthnemadi@gmail.com
            </span>
            <span className="social-divider">&middot;</span>
            <a href="https://github.com/prashanthnemadi18" target="_blank" rel="noopener noreferrer" className="social-item">
              <i className="fa-brands fa-github"></i> GitHub
            </a>
            <span className="social-divider">&middot;</span>
            <a href="https://linkedin.com/in/prashanth-nemadi" target="_blank" rel="noopener noreferrer" className="social-item">
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-photo">
          <img src={process.env.PUBLIC_URL + "/profile.png"} alt="Prashanth Nemadi" />
        </div>
        <div className="hero-content">
          <div className="hero-tag">Available for opportunities</div>
          <h1>Prashanth Nemadi</h1>
          <div className="hero-role">AI Engineer & Full-Stack Developer</div>
          <p className="hero-desc">
            Final-year CS student at Bahubali College of Engineering (2022–26), Shravanabelagola. 
            I build production-ready AI systems spanning agriculture, education, legal tech, and HR recruitment.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-ghost">Get in Touch</a>
            <a href={process.env.PUBLIC_URL + "/Prashanth_Nemadi.pdf"} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
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

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
      
      <footer className="footer">
        <div className="container footer-inner">
          <p>&copy; Prashanth Nemadi. All rights reserved.</p>
          <div className="footer-links">
            <a href="mailto:prashanthnemadi@gmail.com">
              <i className="fa-solid fa-envelope"></i> Email
            </a>
            <a href="https://github.com/prashanthnemadi18" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i> GitHub
            </a>
            <a href="https://linkedin.com/in/prashanth-nemadi" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </a>
            <a href="/Prashanth_Nemadi.pdf" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-file-pdf"></i> Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

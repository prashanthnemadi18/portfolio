import React from 'react';
import './Education.css';

const Education: React.FC = () => {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-label">Education</div>
        <h2 className="section-title">Academic Background</h2>
        <div className="edu-list">
          
          <div className="edu-item">
            <div className="edu-year">2022 — 2026</div>
            <div className="edu-details">
              <h3>Bahubali College of Engineering</h3>
              <div className="edu-degree">B.E. in Computer Science (Pursuing)</div>
              <div className="edu-meta">Shravanabelagola, Karnataka &middot; <strong>CGPA: 8.1</strong></div>
            </div>
          </div>

          <div className="edu-item">
            <div className="edu-year">2020 — 2022</div>
            <div className="edu-details">
              <h3>Sangameshwar Composite PU College</h3>
              <div className="edu-degree">Pre-University (PCMB)</div>
              <div className="edu-meta">Aminagad, Karnataka &middot; <strong>Percentage: 65.6%</strong></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;

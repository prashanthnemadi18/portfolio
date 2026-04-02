import React, { useState } from 'react';
import CertificateModal from './CertificateModal';
import './Achievements.css';

interface Certificate {
  imageUrl: string;
  title: string;
}

const Achievements: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const openCertificate = (imageUrl: string, title: string) => {
    setSelectedCertificate({ imageUrl, title });
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <section className="section section-alt" id="achievements">
      <div className="container">
        <div className="section-label">Achievements</div>
        <h2 className="section-title">Recognition & Certificates</h2>
        <div className="achieve-grid">

          <div className="achieve-card">
            <div className="achieve-icon"><i className="fa-solid fa-trophy"></i></div>
            <h3>HACKMITTEN 2.0</h3>
            <p>National Level Hackathon — Maharaja Institute of Technology, Thandavapura</p>
            <div className="achieve-date">September 12–13, 2025</div>
            <div 
              className="achieve-img-link"
              onClick={() => openCertificate('/hackathon-certificate-1.jpg', 'HACKMITTEN 2.0 Certificate')}
            >
              <img src="/hackathon-certificate-1.jpg" alt="HACKMITTEN 2.0 Certificate" className="achieve-img" />
            </div>
          </div>

          <div className="achieve-card">
            <div className="achieve-icon"><i className="fa-solid fa-microchip"></i></div>
            <h3>Kalp-AI-thon 2025</h3>
            <p>8-hour State-Level AI Hackathon — Kalpataru Institute of Technology, Tiptur</p>
            <div className="achieve-date">September 17, 2025</div>
            <div 
              className="achieve-img-link"
              onClick={() => openCertificate('/hackathon-certificate-2.jpg', 'Kalp-AI-thon 2025 Certificate')}
            >
              <img src="/hackathon-certificate-2.jpg" alt="Kalp-AI-thon 2025 Certificate" className="achieve-img" />
            </div>
          </div>

          <div className="achieve-card">
            <div className="achieve-icon"><i className="fa-solid fa-file-lines"></i></div>
            <h3>IJIRT Research Publication</h3>
            <p>Published paper on AI Generated Online Examination. Impact Factor: 8.017</p>
            <div className="achieve-date">Volume 12 Issue 8 · January 2026</div>
            <div 
              className="achieve-img-link"
              onClick={() => openCertificate('/ijirt-publication-certificate.jpg', 'IJIRT Publication Certificate')}
            >
              <img src="/ijirt-publication-certificate.jpg" alt="IJIRT Publication Certificate" className="achieve-img" />
            </div>
          </div>

          <div className="achieve-card">
            <div className="achieve-icon"><i className="fa-solid fa-briefcase"></i></div>
            <h3>Software Development Internship</h3>
            <p>Secured a software development internship offer from a professional organization</p>
            <div className="achieve-date">2026</div>
            <div 
              className="achieve-img-link"
              onClick={() => openCertificate('/internship-offer-letter.jpg', 'Internship Offer Letter')}
            >
              <img src="/internship-offer-letter.jpg" alt="Internship Offer Letter" className="achieve-img" />
            </div>
          </div>

        </div>

        <div className="key-achievements">
          <h2 className="section-title">Key Achievements</h2>
          <div className="key-achieve-grid">
            <div className="key-item">
              <div className="key-icon"><i className="fa-solid fa-medal"></i></div>
              <div className="key-text">
                <h4>1st Place — Mathematics Day Quiz</h4>
                <p>Demonstrated exceptional problem-solving and analytical skills</p>
              </div>
            </div>
            <div className="key-item">
              <div className="key-icon"><i className="fa-solid fa-users-gear"></i></div>
              <div className="key-text">
                <h4>Hackathon Team Leader</h4>
                <p>Led multiple teams in state and national level hackathons</p>
              </div>
            </div>
            <div className="key-item">
              <div className="key-icon"><i className="fa-solid fa-newspaper"></i></div>
              <div className="key-text">
                <h4>Research Publication in IJIRT</h4>
                <p>AI-based examination systems — Impact Factor 8.017</p>
              </div>
            </div>
            <div className="key-item">
              <div className="key-icon"><i className="fa-solid fa-laptop-code"></i></div>
              <div className="key-text">
                <h4>8+ Full-Stack AI Projects</h4>
                <p>Comprehensive solutions across 6 different domains</p>
              </div>
            </div>
            <div className="key-item">
              <div className="key-icon"><i className="fa-solid fa-graduation-cap"></i></div>
              <div className="key-text">
                <h4>CGPA of 8.1</h4>
                <p>Consistent academic excellence in Computer Science</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedCertificate && (
        <CertificateModal
          imageUrl={selectedCertificate.imageUrl}
          title={selectedCertificate.title}
          onClose={closeCertificate}
        />
      )}
    </section>
  );
};

export default Achievements;

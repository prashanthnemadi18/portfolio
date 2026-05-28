import React from 'react';
import './StatsBar.css';

const StatsBar: React.FC = () => {
  return (
    <div className="stats-bar">
      <div className="container stats-grid">
        <div>
          <span className="stat-num">8+</span>
          <span className="stat-label">AI Projects</span>
        </div>
        <div>
          <span className="stat-num">8.1</span>
          <span className="stat-label">CGPA</span>
        </div>
        <div>
          <span className="stat-num">2</span>
          <span className="stat-label">Hackathons</span>
        </div>
        <div>
          <span className="stat-num">1</span>
          <span className="stat-label">Research Paper</span>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;

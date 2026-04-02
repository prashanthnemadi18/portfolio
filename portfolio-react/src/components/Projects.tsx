import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { Project } from '../types';
import ProjectModal from './ProjectModal';
import './Projects.css';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleViewMore = (project: Project) => {
    if (project.gallery) {
      setSelectedProject(project);
    } else if (project.link) {
      window.open(project.link, '_blank');
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <div className="section-label">Projects</div>
        <h2 className="section-title">What I've Built</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-img-box">
                <img src={project.image} alt={project.title} className="project-img" />
                <span className="project-domain">{project.domain}</span>
              </div>
              <div className="project-body">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-sub">{project.subtitle}</div>
                </div>
                <ul className="project-points">
                  {project.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <div className="project-stack">
                  {project.stack.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <button
                    onClick={() => handleViewMore(project)}
                    className="project-link btn-view-more"
                  >
                    View more ↗
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;

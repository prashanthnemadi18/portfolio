import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import './ProjectModal.css';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleImageClick = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  const closeImageZoom = () => {
    setSelectedImage(null);
  };

  // Extract meaningful name from image path
  const getImageLabel = (imagePath: string): string => {
    // Get filename without extension
    const filename = imagePath.split('/').pop()?.replace(/\.(png|jpg|jpeg|jfif)$/i, '') || '';
    
    // Convert filename to readable format
    // Examples: "home.png" -> "Home", "ai-analysis.png" -> "AI Analysis"
    return filename
      .split(/[-_]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const getSelectedImageLabel = (): string => {
    return selectedImage ? getImageLabel(selectedImage) : '';
  };

  return (
    <>
      <div className="modal project-modal" onClick={handleBackdropClick}>
        <span className="modal-close" onClick={onClose}>&times;</span>
        <div className="project-modal-content">
          <h2>{project.title}</h2>
          <div className="project-gallery">
            {project.gallery?.map((image, index) => (
              <div key={index} className="gallery-item" onClick={() => handleImageClick(image)}>
                <img src={process.env.PUBLIC_URL + image} alt={`${project.title} - ${getImageLabel(image)}`} />
                <span>{getImageLabel(image)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="image-zoom-modal" onClick={closeImageZoom}>
          <span className="image-zoom-close" onClick={closeImageZoom}>&times;</span>
          <div className="image-zoom-content" onClick={(e) => e.stopPropagation()}>
            <div className="image-zoom-wrapper">
              <img src={process.env.PUBLIC_URL + selectedImage} alt="Zoomed view" className="image-zoom-img" />
              <div className="image-zoom-label">{getSelectedImageLabel()}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectModal;

import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import './ProjectModal.css';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Reset to first image when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project.id]);

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

  const handlePrevious = () => {
    if (!project.gallery || project.gallery.length === 0) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.gallery!.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    if (!project.gallery || project.gallery.length === 0) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.gallery!.length - 1 ? 0 : prevIndex + 1
    );
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

  const currentImage = project.gallery?.[currentImageIndex];
  const totalImages = project.gallery?.length || 0;

  return (
    <>
      <div className="modal project-modal" onClick={handleBackdropClick}>
        <span className="modal-close" onClick={onClose}>&times;</span>
        <div className="project-modal-content">
          <h2>{project.title}</h2>
          
          {currentImage && totalImages > 0 && (
            <div className="project-gallery-carousel">
              <div className="carousel-container">
                <button 
                  className="carousel-nav carousel-nav-prev" 
                  onClick={handlePrevious}
                  aria-label="Previous image"
                >
                  <span>&lt;</span>
                </button>
                
                <div className="carousel-image-wrapper" onClick={() => handleImageClick(currentImage)}>
                  <img 
                    src={process.env.PUBLIC_URL + currentImage} 
                    alt={`${project.title} - ${getImageLabel(currentImage)}`}
                    className="carousel-image"
                  />
                  <div className="carousel-image-label">
                    {getImageLabel(currentImage)}
                  </div>
                </div>
                
                <button 
                  className="carousel-nav carousel-nav-next" 
                  onClick={handleNext}
                  aria-label="Next image"
                >
                  <span>&gt;</span>
                </button>
              </div>
              
              <div className="carousel-counter">
                {currentImageIndex + 1} / {totalImages}
              </div>
            </div>
          )}
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

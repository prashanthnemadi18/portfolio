import React from 'react';
import './CertificateModal.css';

interface CertificateModalProps {
  imageUrl: string;
  title: string;
  onClose: () => void;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ imageUrl, title, onClose }) => {
  return (
    <div className="certificate-modal" onClick={onClose}>
      <span className="certificate-modal-close" onClick={onClose}>
        &times;
      </span>
      <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt={title} className="certificate-modal-img" />
        <div className="certificate-modal-title">{title}</div>
      </div>
    </div>
  );
};

export default CertificateModal;

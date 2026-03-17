import React from 'react';
import type { Certificate } from '../types';
import '../styles/CertificateCard.less';

interface CertificateCardProps {
  certificate: Certificate;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  return (
    <div className="certificate-card">
      {certificate.imageUrl && (
        <div className="certificate-image">
          <img src={certificate.imageUrl} alt={certificate.title} />
        </div>
      )}
      
      <div className="certificate-content">
        <h3 className="certificate-title">{certificate.title}</h3>
        <p className="certificate-issuer">{certificate.issuer}</p>
        <p className="certificate-year">{certificate.year}</p>
      </div>

      {certificate.link && (
        <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="certificate-link">
          View Certificate
        </a>
      )}
    </div>
  );
};

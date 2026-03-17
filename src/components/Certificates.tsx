import React from 'react';
import type { Certificate } from '../types';
import { CertificateCard } from './CertificateCard';
import '../styles/Certificates.less';

interface CertificatesProps {
  certificates: Certificate[];
}

export const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
  return (
    <section className="certificates-section">
      <h2 className="certificates-title">Certificates & Credentials</h2>
      <div className="certificates-grid">
        {certificates.map((cert) => (
          <CertificateCard key={cert.id} certificate={cert} />
        ))}
      </div>
    </section>
  );
};

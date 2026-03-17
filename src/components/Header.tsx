import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaKaggle } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import type { Contact } from '../types';
import '../styles/Header.less';

interface HeaderProps {
  name: string;
  title: string;
  bio: string;
  contacts: Contact[];
}

const ABSTRACT = 'Abstract';

const getContactIcon = (contact: Contact): React.ReactNode => {
  const label = contact.label.toLowerCase();

  if (label.includes('github')) {
    return <FaGithub />;
  }
  if (label.includes('linkedin')) {
    return <FaLinkedin />;
  }
  if (label.includes('email') || contact.href.startsWith('mailto:')) {
    return <FaEnvelope />;
  }
  if (label.includes('kaggle')) {
    return <FaKaggle />;
  }
  if (label.includes('leetcode')) {
    return <SiLeetcode />;
  }

  return contact.icon ?? null;
};

export const Header: React.FC<HeaderProps> = ({ name, title, bio, contacts }) => {
  return (
    <header className="paper-header">
      <div className="header-container">
        <div className="title-section">
          <h1 className="paper-title">{name}</h1>
          <p className="paper-subtitle">{title}</p>
        </div>
        <div className="header-divider"></div>

        <nav className="contact-links">
          {contacts.map((contact) => {
            const icon = getContactIcon(contact);

            return (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                title={contact.label}
              >
                {icon ? <span className="contact-icon">{icon}</span> : null}
                {contact.label}
              </a>
            );
          })}
        </nav>
        <div className="bio-section">
          <p className="abstract-label">{ABSTRACT}</p>
          <p className="bio-text">{bio}</p>
        </div>

      </div>
    </header>
  );
};

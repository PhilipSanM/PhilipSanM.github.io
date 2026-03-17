import React from 'react';
import { FaGitAlt, FaGithub, FaHtml5, FaNodeJs } from 'react-icons/fa';
import { SiCss, SiJavascript, SiLeetcode, SiLess, SiReact, SiTypescript, SiVite } from 'react-icons/si';
import '../styles/TechStack.less';

const techList = [
  'TypeScript',
  'React',
  'Vite',
  'Less',
  'HTML',
  'CSS',
  'JavaScript',
  'Node.js',
  'Git',
  'LeetCode',
  'GitHub',
];

const getTechIcon = (tech: string): React.ReactNode => {
  switch (tech) {
    case 'TypeScript':
      return <SiTypescript />;
    case 'React':
      return <SiReact />;
    case 'Vite':
      return <SiVite />;
    case 'Less':
      return <SiLess />;
    case 'HTML':
      return <FaHtml5 />;
    case 'CSS':
      return <SiCss />;
    case 'JavaScript':
      return <SiJavascript />;
    case 'Node.js':
      return <FaNodeJs />;
    case 'Git':
      return <FaGitAlt />;
    case 'LeetCode':
      return <SiLeetcode />;
    case 'GitHub':
      return <FaGithub />;
    default:
      return null;
  }
};

export const TechStack: React.FC = () => (
  <section className="tech-stack-section">
    <ul className="tech-stack-list">
      {techList.map((tech) => (
        <li key={tech} className="tech-item">
          <span className="tech-icon" aria-hidden="true">{getTechIcon(tech)}</span>
          <span className="tech-name">{tech}</span>
        </li>
      ))}
    </ul>
  </section>
);

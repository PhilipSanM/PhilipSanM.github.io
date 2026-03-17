import React from 'react';
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

export const TechStack: React.FC = () => (
  <section className="tech-stack-section">
    <h2>Tech Stack</h2>
    <ul className="tech-stack-list">
      {techList.map((tech) => (
        <li key={tech} className="tech-item">{tech}</li>
      ))}
    </ul>
  </section>
);

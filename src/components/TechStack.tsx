import React from 'react';
import { FaAws, FaDocker, FaGitAlt, FaLinux } from 'react-icons/fa';
import {
  SiGraphql,
  SiJavascript,
  SiJenkins,
  SiKubernetes,
  SiLangchain,
  SiMlflow,
  SiMongodb,
  SiNumpy,
  SiPandas,
  SiPython,
  SiPytorch,
  SiReact,
  SiTypescript,
} from 'react-icons/si';
import '../styles/TechStack.less';

const techList = [
  'Python',
  'NumPy',
  'Pandas',
  'PyTorch',
  'LangChain',
  'MLflow',
  'TypeScript',
  'JavaScript',
  'React',
  'MongoDB',
  'GraphQL',
  'Docker',
  'Kubernetes',
  'AWS',
  'Amplitude',
  'Git',
  'Jenkins',
];

const getTechIcon = (tech: string): React.ReactNode => {
  switch (tech) {
    case 'Python':
      return <SiPython />;
    case 'NumPy':
      return <SiNumpy />;
    case 'Pandas':
      return <SiPandas />;
    case 'PyTorch':
      return <SiPytorch />;
    case 'LangChain':
      return <SiLangchain />;
    case 'MLflow':
      return <SiMlflow />;
    case 'TypeScript':
      return <SiTypescript />;
    case 'JavaScript':
      return <SiJavascript />;
    case 'React':
      return <SiReact />;
    case 'MongoDB':
      return <SiMongodb />;
    case 'GraphQL':
      return <SiGraphql />;
    case 'Docker':
      return <FaDocker />;
    case 'Kubernetes':
      return <SiKubernetes />;
    case 'AWS':
      return <FaAws />;
    case 'Amplitude':
      return <FaLinux />;
    case 'Git':
      return <FaGitAlt />;
    case 'Jenkins':
      return <SiJenkins />;
    default:
      return <FaLinux />;
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

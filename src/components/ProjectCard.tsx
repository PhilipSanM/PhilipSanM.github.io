import React from 'react';
import type { Project } from '../types';
import '../styles/ProjectCard.less';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className={`project-card ${project.featured ? 'featured' : ''}`}>
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        {project.year && <span className="project-year">{project.year}</span>}
      </div>

      <p className="project-abstract">{project.abstract}</p>

      <p className="project-description">{project.description}</p>

      <div className="project-highlights">
        <h4>Key Results</h4>
        <ul>
          {project.highlights.map((highlight, idx) => (
            <li key={idx}>{highlight}</li>
          ))}
        </ul>
      </div>

      <div className="project-technologies">
        <span className="tech-label">Technologies:</span>
        <div className="tech-list">
          {project.technologies.map((tech) => (
            <span key={tech.name} className={`tech-badge tech-${tech.category}`}>
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      <div className="project-links">
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
            Demo
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github">
            Code
          </a>
        )}
      </div>
    </article>
  );
};

import React from 'react';
import type { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import '../styles/ProjectsSection.less';

interface ProjectsSectionProps {
  projects: Project[];
  title?: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  title = 'Projects',
}) => {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section className="projects-section">
      <h2 className="section-title">{title}</h2>
      <div className="section-divider"></div>

      {featured.length > 0 && (
        <div className="featured-projects">
          <h3 className="subsection-title">Featured</h3>
          <div className="projects-grid featured-grid">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}

      {others.length > 0 && (
        <div className="other-projects">
          {featured.length > 0 && <h3 className="subsection-title">Other Work</h3>}
          <div className="projects-grid">
            {others.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

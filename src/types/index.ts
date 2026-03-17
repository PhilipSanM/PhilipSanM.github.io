/**
 * Portfolio Type Definitions
 * Inspired by: "Attention is All You Need"
 */

export interface Contact {
  label: string;
  href: string;
  icon?: string;
}

export interface ProjectTechnology {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'model';
}

export interface Project {
  id: string;
  title: string;
  abstract: string; // Short description like paper abstract
  description: string;
  technologies: ProjectTechnology[];
  link?: string;
  github?: string;
  imageUrl?: string;
  highlights: string[]; // Key achievements/results
  year?: number;
  featured?: boolean;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: number;
  imageUrl?: string;
  link?: string;
}

export interface PortfolioData {
  author: {
    name: string;
    title: string;
    bio: string;
    avatar?: string;
  };
  contacts: Contact[];
  projects: Project[];
  certificates?: Certificate[];
  research?: {
    interests: string[];
    publications?: string[];
  };
}

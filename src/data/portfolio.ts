/**
 * Portfolio Data
 * Update this with your projects and contact information
 */

import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  author: {
    name: 'PhilipSanM',
    title: 'AI Engineer & Software Developer Engineer',
    bio: 'I am an AI engineering student at IPN in Mexico, focused on turning research into production-ready systems. I have deep experience in computer vision and machine learning models deployed to production, from experimentation and evaluation to monitoring and iteration. I am especially driven by the idea behind gradient descent: progress is rarely a giant leap, but the result of many small, consistent corrections in the right direction.',
    avatar: './assets/avatar.jpg',
  },
  contacts: [
    {
      label: 'GitHub',
      href: 'https://github.com/philipsanm',
      icon: '💻',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/philipsanm/',
      icon: '🔗',
    },
    {
      label: 'Email',
      href: 'mailto:felipesanchezmart@gmail.com',
      icon: '✉️',
    },
    {
      label: 'Kaggle',
      href: 'https://www.kaggle.com/philipsanm',
      icon: '📊',
    },
    {
      label: 'LeetCode',
      href: 'https://leetcode.com/u/PhilipSanM/',
      icon: '🧠',
    },
  ],
  projects: [
    {
      id: 'attention-mechanism',
      title: 'Attention Mechanism Implementation',
      abstract: 'A comprehensive implementation of the attention mechanism from scratch.',
      description:
        'Built a full implementation of multi-head self-attention including scaled dot-product attention, demonstrating the core principles behind transformer architecture.',
      technologies: [
        { name: 'Python', category: 'language' },
        { name: 'PyTorch', category: 'framework' },
        { name: 'NumPy', category: 'tool' },
      ],
      highlights: [
        'Implemented scaled dot-product attention with batching',
        'Multi-head attention with learnable projections',
        'Proper masking for causal attention',
        'Detailed mathematical documentation',
      ],
      github: 'https://github.com/example/attention',
      year: 2024,
      featured: true,
    },
    {
      id: 'transformer-model',
      title: 'Custom Transformer Model',
      abstract: 'End-to-end transformer model for sequence-to-sequence tasks.',
      description:
        'Implemented a complete transformer encoder-decoder architecture with positional encoding, layer normalization, and feed-forward networks.',
      technologies: [
        { name: 'Python', category: 'language' },
        { name: 'PyTorch', category: 'framework' },
        { name: 'Hugging Face', category: 'tool' },
      ],
      highlights: [
        'Encoder-decoder architecture',
        'Positional encoding implementation',
        'Layer normalization and dropout',
        'Trained on translation tasks',
      ],
      github: 'https://github.com/example/transformer',
      year: 2024,
      featured: true,
    },
    {
      id: 'nlp-pipeline',
      title: 'End-to-End NLP Pipeline',
      abstract: 'Production-ready NLP pipeline for text classification and sentiment analysis.',
      description:
        'Created a complete NLP pipeline including tokenization, embedding, model training, and inference optimization for deployment.',
      technologies: [
        { name: 'Python', category: 'language' },
        { name: 'FastAPI', category: 'framework' },
        { name: 'Docker', category: 'tool' },
      ],
      highlights: [
        '95% accuracy on classification task',
        'REST API for inference',
        'Containerized for production',
        'Automated pipeline with CI/CD',
      ],
      link: 'https://example.com/nlp-demo',
      github: 'https://github.com/example/nlp-pipeline',
      year: 2023,
    },
    {
      id: 'web-app',
      title: 'React + TypeScript Web App',
      abstract: 'Full-stack web application with modern frontend and backend architecture.',
      description:
        'Built a responsive web application using React, TypeScript, and Node.js with real-time features and optimized performance.',
      technologies: [
        { name: 'React', category: 'framework' },
        { name: 'TypeScript', category: 'language' },
        { name: 'Node.js', category: 'framework' },
      ],
      highlights: [
        'Component-based architecture',
        'Real-time data updates',
        'Responsive design',
        'SEO optimized',
      ],
      link: 'https://example.com',
      github: 'https://github.com/example/web-app',
      year: 2023,
    },
  ],
  research: {
    interests: [
      'Transformer Architecture',
      'Attention Mechanisms',
      'Language Models',
      'Transfer Learning',
      'Neural Architecture Search',
      'Model Optimization',
    ],
    publications: [
      'Published in conference X (2024)',
      'Published in journal Y (2023)',
    ],
  },
};

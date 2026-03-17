# Portfolio - AI Paper Theme

A modern portfolio website inspired by "Attention is All You Need" paper design. Built with React, TypeScript, and LESS.

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.tsx      # Header with name, title, bio & contacts
│   ├── ProjectCard.tsx # Individual project component
│   └── ProjectsSection.tsx # Projects grid container
├── styles/             # LESS stylesheets
│   ├── index.less      # Global styles
│   ├── Header.less     # Header styling
│   ├── ProjectCard.less # Project card styling
│   └── ProjectsSection.less # Grid layout styling
├── types/              # TypeScript type definitions
│   └── index.ts        # All portfolio types
├── data/               # Portfolio content
│   └── portfolio.ts    # Portfolio data & sample projects
├── App.tsx            # Main app component
└── main.tsx           # React entry point
```

## Type Definitions

All types are defined in [src/types/index.ts](src/types/index.ts):

### Core Types

- **`Contact`** - Social/contact link with label and href
- **`ProjectTechnology`** - Tech stack with category (language, framework, tool, model)
- **`Project`** - Complete project data with metadata
- **`PortfolioData`** - Complete portfolio structure

## Components

### Header Component
[src/components/Header.tsx](src/components/Header.tsx)

Displays your name, title, bio, and contact links. Props:
- `name`: string - Your name
- `title`: string - Your title/subtitle
- `bio`: string - Short bio
- `contacts`: Contact[] - Array of contact links

### ProjectCard Component
[src/components/ProjectCard.tsx](src/components/ProjectCard.tsx)

Individual project card showing:
- Title and year
- Abstract (highlighted section)
- Full description
- Key highlights/results
- Technologies with color-coded categories
- Demo and GitHub links
- Featured state styling

### ProjectsSection Component
[src/components/ProjectsSection.tsx](src/components/ProjectsSection.tsx)

Grid layout for projects with automatic separation:
- Featured projects at top
- Other projects below
- Responsive grid (1-3 columns depending on viewport)

## Styling (LESS)

### Color Scheme
- Primary: `#0066cc` (Academic blue)
- Text: `#1a1a1a` (Near black)
- Secondary text: `#555` / `#666`
- Accent: `#f9f9f9` (Light background)

### Key Style Features
- **Academic paper theme** - Serif fonts for headings (Georgia)
- **Tech badges** - Color-coded by category:
  - Language: Yellow (`#fff3cd`)
  - Framework: Cyan (`#d1ecf1`)
  - Tool: Green (`#d4edda`)
  - Model: Gray (`#e2e3e5`)
- **Responsive design** - Mobile-first approach
- **Hover effects** - Smooth transitions on all interactive elements
- **Print-friendly** - Works well in print media

### LESS Files
1. **[index.less](src/styles/index.less)** - Global reset and base styles
2. **[Header.less](src/styles/Header.less)** - Header and navigation
3. **[ProjectCard.less](src/styles/ProjectCard.less)** - Project card styling
4. **[ProjectsSection.less](src/styles/ProjectsSection.less)** - Grid layout

## Data Management

All portfolio content is in [src/data/portfolio.ts](src/data/portfolio.ts):

```typescript
const portfolioData: PortfolioData = {
  author: {
    name: "Your Name",
    title: "Your Title",
    bio: "Your bio...",
  },
  contacts: [
    { label: "GitHub", href: "...", icon: "💻" },
    // ... more contacts
  ],
  projects: [
    {
      id: "project-1",
      title: "Project Title",
      abstract: "Short description",
      description: "Full description",
      technologies: [
        { name: "React", category: "framework" },
      ],
      highlights: ["Result 1", "Result 2"],
      github: "https://...",
      year: 2024,
      featured: true,
    },
    // ... more projects
  ],
}
```

## Getting Started

1. **Edit Portfolio Data**: Update [src/data/portfolio.ts](src/data/portfolio.ts) with your info
2. **Run Development Server**: `npm run dev`
3. **Build for Production**: `npm run build`
4. **Preview Production Build**: `npm run preview`

## Customization

### Adding Projects
1. Add to the `projects` array in [src/data/portfolio.ts](src/data/portfolio.ts)
2. Set `featured: true` for showcase projects
3. Categorize technologies correctly for proper badge colors

### Changing Colors
Edit LESS variables in style files:
- Header colors in [Header.less](src/styles/Header.less)
- Primary blue: `#0066cc` (appears throughout)
- Adjust in all `.less` files as needed

### Modifying Layout
- Grid columns: Edit `grid-template-columns` in [ProjectsSection.less](src/styles/ProjectsSection.less)
- Card spacing: Adjust `gap` and `padding` values
- Responsive breakpoints: Modify `@media (max-width: 768px)` queries

## Features

✨ **Responsive Design** - Works beautifully on mobile, tablet, and desktop
🎨 **Academic Theme** - Clean, paper-like design inspired by research papers
📱 **Mobile Optimized** - Touch-friendly contact links and project cards
🔗 **Rich Project Data** - Support for links, GitHub repos, year, featured flag
🏷️ **Tech Categorization** - Automatic color coding for technology types
♿ **Accessibility** - Semantic HTML and proper ARIA labels
📖 **TypeScript** - Full type safety throughout

## Technologies

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Lightning-fast build tool
- **LESS** - CSS preprocessing
- **ESLint** - Code quality

## Future Enhancements

- Add research interests section
- Publications list
- Dark mode toggle
- Animations on scroll
- Blog/articles section
- Contact form

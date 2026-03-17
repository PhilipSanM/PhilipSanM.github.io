import { Header } from './components/Header'
import { ProjectsSection } from './components/ProjectsSection'
import { TechStack } from './components/TechStack'
import { StatsSection } from './components/StatsSection'
import { portfolioData } from './data/portfolio'
import './styles/index.less'

function App() {
  return (
    <>
      <Header
        name={portfolioData.author.name}
        title={portfolioData.author.title}
        bio={portfolioData.author.bio}
        contacts={portfolioData.contacts}
      />

      <ProjectsSection projects={portfolioData.projects} />

      <section>
        <h1 style={{ textAlign: 'center', margin: '3rem 0 1.5rem 0', fontSize: '2.2rem' }}>Tech Stack &amp; Stats</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', alignItems: 'flex-start', flexWrap: 'nowrap', maxWidth: '1400px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
          <TechStack />
          </div>
          <div style={{ flex: 1, minWidth: '350px' }}>
          <StatsSection />
          </div>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '2rem', color: '#999', fontSize: '0.9rem', borderTop: '1px solid #e0e0e0' }}>
        <p>Built with React, TypeScript & Vite • © 2024</p>
        <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Inspired by "Attention is All You Need"</p>
      </footer>
    </>
  )
}

export default App

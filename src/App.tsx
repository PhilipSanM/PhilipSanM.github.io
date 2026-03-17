import { Header } from './components/Header'
import { ProjectsSection } from './components/ProjectsSection'
import { TechStack } from './components/TechStack'
import { StatsSection } from './components/StatsSection'
import { portfolioData } from './data/portfolio'
import './styles/index.less'

function App() {
  const currentYear = new Date().getFullYear()

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
        <h2 style={{ textAlign: 'center', margin: '1rem 0 1.5rem', fontSize: '1.8rem', color: '#1a1a1a' }}>
          Technologies/Tools I love and Stats
        </h2>
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
        <p>Built with love by PhilipSanM • © {currentYear}</p>
        <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Inspired by "Attention is All You Need"</p>
      </footer>
    </>
  )
}

export default App

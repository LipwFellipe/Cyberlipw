import { Link } from 'react-router-dom'
import Hero from '../../components/Hero/Hero.jsx'
import StatStrip from '../../components/StatStrip/StatStrip.jsx'
import ThreatRadar from '../../components/ThreatRadar/ThreatRadar.jsx'
import ThreatCard from '../../components/ThreatCard/ThreatCard.jsx'
import { threats } from '../../data/threats.js'
import styles from './Home.module.css'

const stats = [
  { value: '8', label: 'Ameaças catalogadas' },
  { value: '6', label: 'Ferramentas de defesa' },
  { value: '4', label: 'Trilhas de estudo' },
  { value: '24/7', label: 'Vigilância digital' },
]

const Home = () => {
  // Destaque: apenas as ameaças críticas e altas (renderização dinâmica).
  const destaques = threats.filter((t) => t.severity !== 'Média').slice(0, 3)

  return (
    <div className="container page">
      <Hero />
      <StatStrip stats={stats} />

      <section className={styles.radarSection}>
        <span className="eyebrow">// componente em destaque</span>
        <h2 className="section-title">Radar de ameaças</h2>
        <p className="section-sub">
          Explore o cenário de riscos de forma visual. Passe o mouse e clique nos
          pontos para inspecionar cada ameaça em tempo real.
        </p>
        <ThreatRadar />
      </section>

      <section className={styles.featured}>
        <div className={styles.featuredHead}>
          <div>
            <span className="eyebrow">// fique de olho</span>
            <h2 className="section-title">Ameaças em destaque</h2>
          </div>
          <Link to="/ameacas" className={styles.seeAll}>Ver todas →</Link>
        </div>
        <div className={styles.grid}>
          {destaques.map((threat) => (
            <ThreatCard key={threat.id} threat={threat} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home

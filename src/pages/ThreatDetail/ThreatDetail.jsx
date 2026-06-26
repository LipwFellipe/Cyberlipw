import { useParams, useNavigate, Link } from 'react-router-dom'
import { getThreatById } from '../../data/threats.js'
import SeverityBadge from '../../components/SeverityBadge/SeverityBadge.jsx'
import styles from './ThreatDetail.module.css'

const ThreatDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const threat = getThreatById(id)

  // Renderização condicional: ameaça inexistente.
  if (!threat) {
    return (
      <div className="container page">
        <div className={styles.notFound}>
          <span className={styles.bigIcon}>🚫</span>
          <h1>Ameaça não encontrada</h1>
          <p>O identificador "{id}" não existe na nossa base.</p>
          <Link to="/ameacas" className={styles.back}>← Voltar ao catálogo</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container page">
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        ← Voltar
      </button>

      <header className={styles.header}>
        <span className={styles.icon}>{threat.icon}</span>
        <div>
          <div className={styles.tags}>
            <SeverityBadge severity={threat.severity} />
            <span className={styles.cat}>{threat.category}</span>
          </div>
          <h1 className={styles.title}>{threat.name}</h1>
          <p className={styles.summary}>{threat.summary}</p>
        </div>
      </header>

      <div className={styles.body}>
        <section className={styles.block}>
          <h2 className={styles.blockTitle}>Como funciona</h2>
          <p>{threat.description}</p>
          <p className={styles.vector}>
            <strong>Vetor de ataque:</strong> {threat.vector}
          </p>
        </section>

        <section className={styles.block}>
          <h2 className={styles.blockTitle}>Como se proteger</h2>
          <ul className={styles.list}>
            {threat.mitigations.map((item, index) => (
              <li key={index}>
                <span className={styles.check}>✓</span> {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

export default ThreatDetail

import { useNavigate } from 'react-router-dom'
import SeverityBadge from '../SeverityBadge/SeverityBadge.jsx'
import styles from './ThreatCard.module.css'

// Props desestruturadas (threat).
const ThreatCard = ({ threat }) => {
  const navigate = useNavigate()

  // Evento de clique que navega para a página de detalhe usando useNavigate.
  const abrirDetalhe = () => {
    navigate(`/ameacas/${threat.id}`)
  }

  return (
    <article className={styles.card} onClick={abrirDetalhe}>
      <div className={styles.top}>
        <span className={styles.icon} aria-hidden="true">{threat.icon}</span>
        <SeverityBadge severity={threat.severity} />
      </div>

      <h3 className={styles.name}>{threat.name}</h3>
      <p className={styles.category}>{threat.category}</p>
      <p className={styles.summary}>{threat.summary}</p>

      <button
        className={styles.cta}
        onClick={(event) => {
          event.stopPropagation()
          abrirDetalhe()
        }}
      >
        Ver detalhes →
      </button>
    </article>
  )
}

export default ThreatCard

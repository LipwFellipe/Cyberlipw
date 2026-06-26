import styles from './SeverityBadge.module.css'

// Props desestruturadas (severity).
const SeverityBadge = ({ severity }) => {
  const level = severity.toLowerCase()
  return (
    <span className={`${styles.badge} ${styles[level] || ''}`}>
      <span className={styles.dot} />
      {severity}
    </span>
  )
}

export default SeverityBadge

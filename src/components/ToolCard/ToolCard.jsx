import styles from './ToolCard.module.css'

// Props desestruturadas (tool).
const ToolCard = ({ tool }) => {
  return (
    <article className={styles.card}>
      <span className={styles.icon} aria-hidden="true">{tool.icon}</span>
      <div className={styles.body}>
        <div className={styles.head}>
          <h3 className={styles.name}>{tool.name}</h3>
          {/* Renderização condicional do selo gratuito/pago */}
          {tool.free ? (
            <span className={`${styles.tag} ${styles.free}`}>Grátis</span>
          ) : (
            <span className={`${styles.tag} ${styles.paid}`}>Pago</span>
          )}
        </div>
        <p className={styles.type}>{tool.type}</p>
        <p className={styles.desc}>{tool.description}</p>
      </div>
    </article>
  )
}

export default ToolCard

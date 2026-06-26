import styles from './StatStrip.module.css'

// Props desestruturadas com valor padrão.
const StatStrip = ({ stats = [] }) => {
  return (
    <div className={styles.strip}>
      {stats.map((stat) => (
        <div key={stat.label} className={styles.item}>
          <span className={styles.value}>{stat.value}</span>
          <span className={styles.label}>{stat.label}</span>
        </div>
      ))}
    </div>
  )
}

export default StatStrip

import { useState } from 'react'
import { tracks, tips } from '../../data/learning.js'
import styles from './Learn.module.css'

const Learn = () => {
  const [tipIndex, setTipIndex] = useState(0)

  // Evento de clique: sorteia a próxima dica de segurança.
  const proximaDica = () => {
    setTipIndex((atual) => (atual + 1) % tips.length)
  }

  return (
    <div className="container page">
      <span className="eyebrow">// nunca pare de aprender</span>
      <h1 className="section-title">Trilhas de aprendizado</h1>
      <p className="section-sub">
        Do básico ao avançado: comece pelos fundamentos e evolua até resposta a
        incidentes. Cada trilha reúne lições práticas sobre segurança.
      </p>

      <div className={styles.grid}>
        {tracks.map((track) => (
          <article key={track.id} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.icon}>{track.icon}</span>
              <span className={`${styles.level} ${styles[track.level.toLowerCase()]}`}>
                {track.level}
              </span>
            </div>
            <h3 className={styles.title}>{track.title}</h3>
            <p className={styles.lessons}>{track.lessons} lições</p>
            <ul className={styles.topics}>
              {track.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className={styles.tipBox}>
        <span className={styles.tipLabel}>💡 Dica de segurança</span>
        <p className={styles.tipText}>{tips[tipIndex]}</p>
        <button className={styles.tipBtn} onClick={proximaDica}>
          Próxima dica →
        </button>
      </section>
    </div>
  )
}

export default Learn

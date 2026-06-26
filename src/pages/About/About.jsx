import { Link } from 'react-router-dom'
import styles from './About.module.css'

const tech = ['React', 'JavaScript', 'Vite', 'React Router DOM', 'CSS Modules']

const About = () => {
  return (
    <div className="container page">
      <span className="eyebrow">// sobre o projeto</span>
      <h1 className="section-title">CyberLipw</h1>
      <p className="section-sub">
        Um portal educacional de cibersegurança feito como Single Page Application
        em React. O objetivo é apresentar ameaças, ferramentas e trilhas de estudo
        de forma visual e interativa.
      </p>

      <div className={styles.cards}>
        <article className={styles.card}>
          <h2>O que é</h2>
          <p>
            O CyberLipw reúne, em um só lugar, um catálogo de ameaças digitais, um
            arsenal de ferramentas de defesa e trilhas de aprendizado. Todo o conteúdo
            é mockado localmente no frontend, sem backend.
          </p>
        </article>

        <article className={styles.card}>
          <h2>Componente criativo</h2>
          <p>
            O destaque é o <strong>Radar de Ameaças</strong>: um scope animado onde
            cada ameaça vira um ponto posicionado por severidade. A varredura gira,
            os pontos reagem ao mouse e ao clique, e um painel revela os detalhes.
          </p>
        </article>

        <article className={styles.card}>
          <h2>Tecnologias</h2>
          <ul className={styles.tech}>
            {tech.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>

      <section className={styles.author}>
        <h2 className={styles.authorTitle}>Desenvolvido por</h2>
        <div className={styles.member}>
          <span className={styles.avatar}>LN</span>
          <div>
            <strong>Luiz Fellipe Nunes</strong>
            <span className={styles.ra}>RA: 5165449</span>
          </div>
        </div>
        <p className={styles.course}>
          Linguagem de Programação para Internet · Prof. Dr. Camilo Barreto · UNIUBE
        </p>
        <Link to="/" className={styles.home}>← Voltar ao início</Link>
      </section>
    </div>
  )
}

export default About

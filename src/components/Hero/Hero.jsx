import { useNavigate } from 'react-router-dom'
import heroArt from '../../assets/hero.svg'
import styles from './Hero.module.css'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <span className="eyebrow">// segurança digital ao seu alcance</span>
        <h1 className={styles.title}>
          Entenda as <span className={styles.grad}>ameaças</span> antes que elas te encontrem.
        </h1>
        <p className={styles.lead}>
          O CyberLipw reúne ameaças, ferramentas e trilhas de aprendizado de
          cibersegurança num só lugar, com um radar interativo para você explorar o
          cenário de riscos de forma visual.
        </p>
        <div className={styles.actions}>
          {/* Botão que navega usando o hook useNavigate */}
          <button className={styles.primary} onClick={() => navigate('/ameacas')}>
            Explorar ameaças
          </button>
          <button className={styles.ghost} onClick={() => navigate('/aprenda')}>
            Começar a aprender
          </button>
        </div>
      </div>

      <div className={styles.art}>
        <img src={heroArt} alt="Ilustração de rede protegida por um escudo digital" />
      </div>
    </section>
  )
}

export default Hero

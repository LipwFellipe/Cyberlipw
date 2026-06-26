import { useState } from 'react'
import ToolCard from '../../components/ToolCard/ToolCard.jsx'
import { tools } from '../../data/tools.js'
import styles from './Tools.module.css'

const Tools = () => {
  // Evento: alterna entre mostrar todas as ferramentas ou só as gratuitas.
  const [soGratis, setSoGratis] = useState(false)

  const lista = soGratis ? tools.filter((t) => t.free) : tools

  return (
    <div className="container page">
      <span className="eyebrow">// arsenal de defesa</span>
      <h1 className="section-title">Ferramentas de segurança</h1>
      <p className="section-sub">
        Uma seleção de ferramentas usadas por profissionais para proteger sistemas,
        analisar redes e testar a segurança de aplicações.
      </p>

      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={soGratis}
          onChange={(event) => setSoGratis(event.target.checked)}
        />
        <span className={styles.track}><span className={styles.thumb} /></span>
        Mostrar apenas ferramentas gratuitas
      </label>

      <div className={styles.grid}>
        {lista.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  )
}

export default Tools

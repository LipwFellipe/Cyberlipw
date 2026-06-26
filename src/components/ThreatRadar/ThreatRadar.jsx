import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { threats } from '../../data/threats.js'
import SeverityBadge from '../SeverityBadge/SeverityBadge.jsx'
import styles from './ThreatRadar.module.css'

// ─────────────────────────────────────────────────────────────
// COMPONENTE CRIATIVO AUTORAL: Radar de Ameaças
// Um "scope" estilo radar onde cada ameaça é um blip posicionado
// por severidade (quanto mais crítica, mais perto do centro).
// A varredura gira de forma animada e pode ser ligada/desligada.
// Passar o mouse sobre um blip o destaca e revela um rótulo;
// clicar seleciona a ameaça e abre o painel ao lado.
// ─────────────────────────────────────────────────────────────

const CENTER = 150
const RADIUS_BY_SEVERITY = {
  Crítica: 48,
  Alta: 84,
  Média: 118,
}

const ThreatRadar = () => {
  const navigate = useNavigate()
  const [active, setActive] = useState(true)
  const [hovered, setHovered] = useState(null)
  const [selected, setSelected] = useState(null)

  // Calcula a posição polar de cada blip uma única vez.
  const blips = useMemo(() => {
    return threats.map((threat, index) => {
      const angle = (index / threats.length) * Math.PI * 2 - Math.PI / 2
      const radius = RADIUS_BY_SEVERITY[threat.severity] ?? 100
      return {
        ...threat,
        x: CENTER + radius * Math.cos(angle),
        y: CENTER + radius * Math.sin(angle),
      }
    })
  }, [])

  const hoveredBlip = blips.find((b) => b.id === hovered)
  const selectedThreat = threats.find((t) => t.id === selected)

  return (
    <div className={styles.wrap}>
      <div className={styles.scope}>
        {/* Varredura giratória (animação pausa quando desativada) */}
        <div
          className={styles.sweep}
          style={{ animationPlayState: active ? 'running' : 'paused' }}
        />

        <svg viewBox="0 0 300 300" className={styles.grid}>
          {/* Anéis concêntricos */}
          {[48, 84, 118, 140].map((r) => (
            <circle key={r} cx={CENTER} cy={CENTER} r={r} className={styles.ring} />
          ))}
          {/* Linhas de mira */}
          <line x1={CENTER} y1="10" x2={CENTER} y2="290" className={styles.cross} />
          <line x1="10" y1={CENTER} x2="290" y2={CENTER} className={styles.cross} />
          <line x1="34" y1="34" x2="266" y2="266" className={styles.cross} />
          <line x1="266" y1="34" x2="34" y2="266" className={styles.cross} />

          {/* Blips das ameaças */}
          {blips.map((blip) => {
            const isOn = hovered === blip.id || selected === blip.id
            return (
              <g
                key={blip.id}
                className={styles.blip}
                onMouseEnter={() => setHovered(blip.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelected(blip.id)}
              >
                {isOn && (
                  <circle cx={blip.x} cy={blip.y} r="16" className={styles.pulse} />
                )}
                <circle
                  cx={blip.x}
                  cy={blip.y}
                  r={isOn ? 8 : 5}
                  className={`${styles.dot} ${styles[blip.severity.toLowerCase()]}`}
                />
              </g>
            )
          })}
        </svg>

        {/* Rótulo flutuante no hover */}
        {hoveredBlip && (
          <span
            className={styles.tag}
            style={{
              left: `${(hoveredBlip.x / 300) * 100}%`,
              top: `${(hoveredBlip.y / 300) * 100}%`,
            }}
          >
            {hoveredBlip.icon} {hoveredBlip.name}
          </span>
        )}

        <button
          className={styles.power}
          onClick={() => setActive((v) => !v)}
        >
          {active ? '⏸ pausar varredura' : '▶ iniciar varredura'}
        </button>
      </div>

      {/* Painel lateral: renderização condicional pelo estado selecionado */}
      <div className={styles.panel}>
        {selectedThreat ? (
          <div className={styles.detail}>
            <div className={styles.detailHead}>
              <span className={styles.detailIcon}>{selectedThreat.icon}</span>
              <SeverityBadge severity={selectedThreat.severity} />
            </div>
            <h3 className={styles.detailName}>{selectedThreat.name}</h3>
            <p className={styles.detailCat}>{selectedThreat.category}</p>
            <p className={styles.detailText}>{selectedThreat.summary}</p>
            <button
              className={styles.detailBtn}
              onClick={() => navigate(`/ameacas/${selectedThreat.id}`)}
            >
              Abrir dossiê completo →
            </button>
          </div>
        ) : (
          <div className={styles.empty}>
            <p className={styles.emptyMono}>{'>'} aguardando seleção...</p>
            <p className={styles.emptyText}>
              Clique em um ponto do radar para inspecionar a ameaça. Pontos mais
              próximos do centro são mais críticos.
            </p>
            <ul className={styles.legend}>
              <li><span className={`${styles.lg} ${styles.crítica}`} /> Crítica</li>
              <li><span className={`${styles.lg} ${styles.alta}`} /> Alta</li>
              <li><span className={`${styles.lg} ${styles.média}`} /> Média</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default ThreatRadar

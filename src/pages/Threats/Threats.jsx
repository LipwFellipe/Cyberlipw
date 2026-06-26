import { useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar.jsx'
import ThreatCard from '../../components/ThreatCard/ThreatCard.jsx'
import { threats } from '../../data/threats.js'
import styles from './Threats.module.css'

const Threats = () => {
  // LIFT STATE UP: o estado da busca e do filtro vive aqui, no componente pai.
  // O SearchBar (filho) altera esse estado e a lista de cards reage a ele.
  const [searchText, setSearchText] = useState('')
  const [severity, setSeverity] = useState('Todas')

  const termo = searchText.trim().toLowerCase()

  const filtradas = threats.filter((threat) => {
    const casaTexto =
      threat.name.toLowerCase().includes(termo) ||
      threat.category.toLowerCase().includes(termo)
    const casaSeveridade = severity === 'Todas' || threat.severity === severity
    return casaTexto && casaSeveridade
  })

  return (
    <div className="container page">
      <span className="eyebrow">// base de conhecimento</span>
      <h1 className="section-title">Catálogo de ameaças</h1>
      <p className="section-sub">
        Conheça os principais tipos de ataque, como funcionam e como se proteger.
        Use a busca e os filtros para encontrar rapidamente o que procura.
      </p>

      <SearchBar
        value={searchText}
        onChange={setSearchText}
        severity={severity}
        onSeverityChange={setSeverity}
      />

      <p className={styles.count}>
        {filtradas.length} de {threats.length} ameaças
      </p>

      {/* Renderização condicional: lista x estado vazio */}
      {filtradas.length > 0 ? (
        <div className={styles.grid}>
          {filtradas.map((threat) => (
            <ThreatCard key={threat.id} threat={threat} />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>🔍</span>
          <h3>Nenhuma ameaça encontrada</h3>
          <p>Tente outro termo de busca ou remova os filtros aplicados.</p>
        </div>
      )}
    </div>
  )
}

export default Threats

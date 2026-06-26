import styles from './SearchBar.module.css'

// Componente controlado: o estado vive no componente pai (Lift State Up).
// Recebe o valor e o callback por props desestruturadas.
const SearchBar = ({ value, onChange, severity, onSeverityChange }) => {
  const niveis = ['Todas', 'Crítica', 'Alta', 'Média']

  return (
    <div className={styles.wrap}>
      <div className={styles.field}>
        <span className={styles.icon}>⌕</span>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Buscar ameaça por nome ou categoria..."
        />
        {/* Renderização condicional do botão limpar */}
        {value && (
          <button className={styles.clear} onClick={() => onChange('')}>
            ✕
          </button>
        )}
      </div>

      <div className={styles.filters}>
        {niveis.map((nivel) => (
          <button
            key={nivel}
            className={`${styles.chip} ${severity === nivel ? styles.chipOn : ''}`}
            onClick={() => onSeverityChange(nivel)}
          >
            {nivel}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchBar

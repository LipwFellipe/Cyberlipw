import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <img src="/logo.svg" alt="" width="22" height="22" />
          <span>CyberLipw</span>
        </div>
        <p className={styles.note}>
          Projeto acadêmico · Linguagem de Programação para Internet · UNIUBE
        </p>
        <p className={styles.mono}>// fique seguro, mantenha-se atualizado</p>
      </div>
    </footer>
  )
}

export default Footer

import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const links = [
  { to: '/', label: 'Início', end: true },
  { to: '/ameacas', label: 'Ameaças' },
  { to: '/ferramentas', label: 'Ferramentas' },
  { to: '/aprenda', label: 'Aprenda' },
  { to: '/sobre', label: 'Sobre' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <NavLink to="/" className={styles.brand} onClick={() => setOpen(false)}>
          <img src="/logo.svg" alt="Logo SentinelaHub" width="30" height="30" />
          <span>Sentinela<strong>Hub</strong></span>
        </NavLink>

        <button
          className={styles.toggle}
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? '✕' : '☰'}
        </button>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar

import Link from 'next/link'
import Button from "./Button";
import styles from "../styles/CtaSection.module.scss";

const navItems = {
  '/': {
    name: 'Features',
  },
  '/blog': {
    name: 'Preise',
  },
  '/anmelden': {
    name: 'Anmelden',
  },
}

export function Navbar() {
  return (
    <nav
      id="nav"
    >
      <ul>
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
              <li key={name}>
                <Link
                  key={path}
                  href={path}
                >
                  {name}
                </Link>
              </li>
          )
        })}
      </ul>
      <Button href="/" variant="light" className={styles.register} size="sm">Kostenlos Registrieren</Button>
    </nav>
  )
}

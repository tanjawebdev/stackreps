import Link from 'next/link'

const navItems = {
  '/agb': {
    name: 'AGB',
  },
  '/datenschutz': {
    name: 'Datenschutz',
  },
  '/impressum': {
    name: 'Impressum',
  },
}

export function FooterNav() {
  return (
    <nav
      id="footernav"
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
    </nav>
  )
}

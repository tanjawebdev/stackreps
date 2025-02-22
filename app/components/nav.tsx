"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from "./Button";
import { scrollToSection } from "../utils/scrollToSection";

const navItems = [
  { path: '/', name: 'Features', sectionId: 'features' },
  { path: '/', name: 'Preise', sectionId: 'prices' },
  { path: 'https://study.stackreps.com', name: 'Anmelden' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
      <nav id="nav">
        <ul>
          {navItems.map(({ path, name, sectionId }) => (
              <li key={name}>
                {pathname === "/" && sectionId ? (
                    <span onClick={() => scrollToSection(sectionId)} style={{ background: "none", border: "none", cursor: "pointer" }}>
                      {name}
                    </span>
                ) : (
                    <Link href={path}>{name}</Link>
                )}
              </li>
          ))}
        </ul>
        <Button href="https://study.stackreps.com/" variant="light" className="login-lg" size="sm">
          Kostenlos Registrieren
        </Button>

        <Button href="https://study.stackreps.com/" variant="light" className="login-sm" size="sm">
            Anmelden
        </Button>
      </nav>
  );
}
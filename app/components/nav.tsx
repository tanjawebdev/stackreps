"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from "./Button";
import styles from "../styles/CtaSection.module.scss";

const navItems = [
  { path: '/', name: 'Features', sectionId: 'features' },
  { path: '/', name: 'Preise', sectionId: 'prices' },
  { path: 'https://study.stackreps.com', name: 'Anmelden' },
];

export function Navbar() {
  const pathname = usePathname();

  const handleScroll = (sectionId: string) => {
      const section = document.getElementById(sectionId);
      if (section) {
          const offset = 100;
          const topPosition = section.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({
              top: topPosition,
              behavior: "smooth",
          });
      }
  };

  return (
      <nav id="nav">
        <ul>
          {navItems.map(({ path, name, sectionId }) => (
              <li key={name}>
                {pathname === "/" && sectionId ? (
                    <span onClick={() => handleScroll(sectionId)} style={{ background: "none", border: "none", cursor: "pointer" }}>
                      {name}
                    </span>
                ) : (
                    <Link href={path}>{name}</Link>
                )}
              </li>
          ))}
        </ul>
        <Button href="/" variant="light" className={styles.register} size="sm">
          Kostenlos Registrieren
        </Button>
      </nav>
  );
}
"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import { scrollToSection } from "../utils/scrollToSection";

const navItems = [
    { path: "/", name: "Features", sectionId: "features" },
    { path: "/", name: "Preise", sectionId: "prices" },
    { path: "https://study.stackreps.com", name: "Anmelden" },
];

export function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav id="nav">
            {/* Desktop Nav */}
            <ul className="nav-links">
                {navItems.map(({ path, name, sectionId }) => (
                    <li key={name}>
                        {pathname === "/" && sectionId ? (
                            <span onClick={() => { scrollToSection(sectionId); }} className="nav-item">
                {name}
              </span>
                        ) : (
                            <Link href={path} className="nav-item">{name}</Link>
                        )}
                    </li>
                ))}
            </ul>

            <Button href="https://study.stackreps.com/" variant="light" className="login-lg" size="sm">
                Kostenlos Registrieren
            </Button>

            {/* Mobile Menu Button */}
            <button className={`burger-menu ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? "×" :  "☰" }
            </button>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div className="mobile-menu">
                    <ul>
                        {navItems.map(({ path, name, sectionId }) => (
                            <li key={name}>
                                {pathname === "/" && sectionId ? (
                                    <span onClick={() => { scrollToSection(sectionId); closeMenu(); }}>
                                        {name}
                                      </span>
                                ) : (
                                    <Link href={path} onClick={closeMenu}>{name}</Link>
                                )}
                            </li>
                        ))}
                    </ul>
                    <Button href="https://study.stackreps.com/" variant="light" className="login-sm" size="sm">
                        Kostenlos registrieren
                    </Button>
                </div>
            )}

            {/* Mobile Login Button (outside of the menu) */}
            <Button href="https://study.stackreps.com/" variant="light" className="login-sm" size="sm">
                Anmelden
            </Button>
        </nav>
    );
}
"use client";
import Button from "./Button";
import { scrollToSection } from "../utils/scrollToSection";
import useFadeInOnScroll from "../utils/useFadeInOnScroll";


export default function IntroText() {
  const ref = useFadeInOnScroll(0, 0);

  return (
     <section className="intro-text container fade-in" ref={ref}>
       <span className={"summary"}>
         Was ist Stackreps?
       </span>
         <p className="description">
         Stackreps erstellt dir aus deinen Dokumenten Lernpläne mit Karteikarten, Tests und Zusammenfassungen. Wir berechnen angepasst auf dein Prüfungsdatum den optimalen Zeitpunkt, um die erstellten Unterlagen zu lernen, damit du dir deinen Lernstoff so effizient wie möglich aneignen kannst.
         </p>
         <div className="intro-test-buttons">
             <Button href="https://study.stackreps.com/" variant="light" className="register" size="lg">Registrieren</Button>
             <Button onClick={() => scrollToSection("features")} variant="outline-light" className="howto" size="lg">So funktioniert’s</Button>
         </div>
     </section>
  )
}

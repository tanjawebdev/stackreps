"use client";
import Button from "./Button";
import { scrollToSection } from "../utils/scrollToSection";
import useFadeInOnScroll from "../utils/useFadeInOnScroll";


export default function IntroText() {
  const ref = useFadeInOnScroll(0, 0);

  return (
     <section className="intro-text container">
         <div className="fade-in" ref={ref}>
           <span className={"summary"}>
             Was ist Stackreps?
           </span>
             <p className="description">
             Stackreps erstellt dir aus deinen Dokumenten Lernpläne mit Karteikarten, Tests und Zusammenfassungen. Angepasst an dein Prüfungsdatum finden wir den idealen Zeitplan, mit dem du dir deinen Lernstoff so effizient wie möglich aneignen kannst.
             </p>
             <div className="intro-test-buttons">
                 <Button href="https://study.stackreps.com/" variant="light" className="register" size="lg">Registrieren</Button>
                 <Button onClick={() => scrollToSection("features")} variant="outline-light" className="howto" size="lg">So funktioniert’s</Button>
             </div>
         </div>
     </section>
  )
}

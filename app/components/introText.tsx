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
             Mit Stockreps weißt du dank unseres intelligenten Lernplans genau, was du wann lernen musst. Unsere
             fortschrittlichen Lernalgorithmen passen sich deinem individuellen Fortschritt an, sodass du wesentlich
             effizienter lernst und wertvolle Zeit sparst.
             <br/><br/>
             Die Flexibilität unserer Plattform ermöglicht es dir, jederzeit und überall zu lernen. Durch regelmäßige
             Wiederholungen und gezielte Übungen bist du optimal auf deine Prüfung vorbereitet und kannst deinen
             Lernerfolg maximieren.
         </p>
         <div className="intro-test-buttons">
             <Button href="https://study.stackreps.com/" variant="light" className="register" size="lg">Registrieren</Button>
             <Button onClick={() => scrollToSection("features")} variant="outline-light" className="howto" size="lg">So funktionierts</Button>
         </div>
     </section>
  )
}

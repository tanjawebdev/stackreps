import Button from "./Button";
import styles from "../styles/Heading.module.scss";

export default function CtaSection() {
  return (
    <section className="cta-section container">
        <div className="grid">
          <span className="h1 g-col-md-4">
              Probiere Stackreps kostenlos aus
          </span>
          <span className="description g-col-md-6 g-start-md-7">
              Melde dich an und entdecke, wie einfach und effizient Lernen mit Stackreps sein kann. Erhalte sofort Zugang zu personalisierten Lernplänen, Karteikarten und Quizfragen, die dich optimal auf deine Prüfung vorbereiten.
          </span>
        </div>
        <Button href="/" variant="light" className={styles.register} size="lg">Jetzt Registrieren</Button>
    </section>
  )
}

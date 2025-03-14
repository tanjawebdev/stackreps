import Button from "./Button";
import styles from "../styles/CtaSection.module.scss";

export default function CtaSection() {
  return (
      <section className="cta-section container">
          <div className={styles.topSection + " grid"}>
          <span className="h1 g-col-12 g-col-md-4">
              Probiere Stackreps kostenlos aus
          </span>
              <span className="description g-col-12 g-col-md-6 g-start-md-7">
              Registriere dich und entdecke, wie einfach und effizient Lernen mit Stackreps sein kann. Erhalte sofort Zugang zu personalisierten Lernplänen, Karteikarten und Tests, die dich optimal auf deine Prüfung vorbereiten.
          </span>
          </div>
          <Button href="https://study.stackreps.com/" variant="light" className={styles.register} size="lg">Jetzt Registrieren</Button>
          <div className={styles.lightspot + " spot"}></div>
      </section>
  )
}

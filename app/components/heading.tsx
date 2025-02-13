import Button from "./Button";
import styles from '../styles/Heading.module.scss';

export default function Heading() {
  return (
    <section className={styles.heading + " container"}>
      <span className={styles.summary + " summary"}>
        Effizient lernen, leicht bestehen
      </span>
      <h1>Mit AI zum Lernerfolg</h1>
      <p className={styles.subtitle + " subtitle"}>
        Karteikarten, Tests und der optimale Lernplan angepasst auf deine Prüfung.
      </p>
      <div className="heading-buttons">
        <Button href="/" variant="light" className={styles.register} size="lg">Kostenlos Registrieren</Button>
        <Button href="/" variant="outline-light" className="howto" size="lg">So funktionierts</Button>
      </div>
    </section>
  )
}

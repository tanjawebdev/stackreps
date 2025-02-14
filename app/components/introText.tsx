import Button from "./Button";
import styles from "../styles/Heading.module.scss";

export default function IntroText() {
  return (
      <section className="intro-text container">
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
              <Button href="/" variant="light" className={styles.register} size="lg">Registrieren</Button>
              <Button href="/" variant="outline-light" className="howto" size="lg">Anmelden</Button>
          </div>
      </section>
  )
}

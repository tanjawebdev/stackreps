import styles from "../styles/Vision.module.scss";

export default function Vision() {
  return (
      <section className="vision container">
        <span className={"summary"}>
          Wir glauben an dich
        </span>
          <p className="description">
            Wir glauben daran, dass du alles lernen kannst. Mit den richtigen Lernmethoden und dem richtigen Zeitplan lernst du effizienter und findest wieder Freude daran, dir neue Materien anzueignen. Stackreps ermöglicht es dir, Lernmethoden wie Spaced-Repetition und Active-Recall ohne Aufwand zu nutzen, damit deinen Zielen nichts mehr im Weg steht.
          </p>
          <div className={styles.sponsors}>
             <span className={styles.sponsorssummary + " summary"}>
               Unsere Förderer sind davon überzeugt
             </span>
              <div className={styles.sponsorimages}>
                  <picture>
                      <source srcSet="/images/sponsor2.png" type="image/png"/>
                      <img src="/images/sponsor2.png" alt="Sponsor Logo"/>
                  </picture>
                  <picture>
                      <source srcSet="/images/sponsor1.png" type="image/png"/>
                      <img className={styles.image2} src="/images/sponsor1.png" alt="Sponsor Logo"/>
                  </picture>
              </div>
          </div>
          <div className={styles.lightspot + " spot"}></div>
      </section>
  )
}

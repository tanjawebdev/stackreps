import styles from "../styles/Vision.module.scss";

export default function Vision() {
  return (
      <section className="vision container">
        <span className={"summary"}>
          Unsere Vision: Lernen neu definieren
        </span>
        <p className="description">
            Bei Stackreps glauben wir daran, dass Lernen nicht nur effektiv, sondern auch intelligent und zugänglich sein sollte. Unsere Mission ist es, das Lernen für Studierende, die viel Auswendig lernen müssen, zu revolutionieren. Durch den Einsatz von unseren Lernalgorithmen schaffen wir eine Plattform, die nicht nur Zeit spart, sondern auch den Lernerfolg maximiert.
            <br/><br/>
            Wir möchten, dass du dich voll und ganz auf deine Ziele konzentrieren kannst, ohne dich mit der Organisation deines Lernstoffs aufhalten zu müssen. Von uns erhältst du die Werkzeuge, die du brauchst, um effizienter zu lernen, besser Wissen zu behalten und deine Prüfungen mit Zuversicht zu meistern.
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
      </section>
  )
}

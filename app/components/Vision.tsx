import styles from "../styles/Vision.module.scss";

export default function Vision() {
  return (
      <section className="vision container">
        <span className={"summary"}>
          Unsere Vision: Lernen neu definieren
        </span>
          <p className="description">
            Bei Stackreps glauben wir daran, dass Lernen nicht nur effektiv, sondern auch effizient und für alle zugänglich sein sollte. Unsere Mission ist es, das Lernen für Studierende, Schüler und alle Wissbegierigen zu revolutionieren. 
            <br/><br/>
            Dank unserer innovativen Algorithmen, die auf der Spaced-Repetition-Methode basieren, sparst du nicht nur Zeit, sondern maximierst auch deinen Lernerfolg. Denn mit unseren intelligenten Lernplänen und KI-generierten Lernmaterialien kannst du dich voll und ganz auf das konzentrieren, was wirklich zählt: das Lernen.
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

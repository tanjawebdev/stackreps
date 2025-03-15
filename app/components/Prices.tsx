"use client"
import PriceCard from "./PriceCard";
import styles from "../styles/Prices.module.scss";
import useFadeInOnScroll from "../utils/useFadeInOnScroll";

export default function Prices() {
    const refPrice1 = useFadeInOnScroll(300, 0);
    const refPrice2 = useFadeInOnScroll(0, 0);
    const refPrice3 = useFadeInOnScroll(300, 0);

  return (
      <section id="prices" className="prices container">
          <div className="grid">
              <div className="title g-col-12 g-col-lg-7 g-col-xl-5">
                  <h2>Preise und Abos</h2>
              </div>
          </div>
              <div className={styles.pricesGrid + " grid"}>
              <PriceCard
                      headline="Starterpack"
                      price={0}
                      link="https://study.stackreps.com/"
                      linktext="Produkt kaufen"
                      points={["+ 100 Credits nach Authentifizierung", "Für Lernpläne zu beliebigen Dokumenten", "Inkl. Lernkarten", "Inkl. Multiple-Choice-Tests", "Inkl. Zusammenfassungen"]}
                      highlight={true}
                      ref={refPrice2}
                  >
                      <p>
                          Erhalte <strong> 25 Credits</strong>* zum automatischen Erstellen von Lernplänen samt zugehörigen Lernmaterialien (Lernkarten, Multiple-Choice-Fragen, Zusammenfassungen etc.) für beliebige Dokumente. <br/>

                      </p>
                  </PriceCard>
                  <PriceCard
                      headline="Studypack S"
                      price={1.99}
                      link="https://study.stackreps.com/"
                      linktext="Produkt kaufen"
                      points={["100 Credits", "Für Lernpläne zu beliebigen Dokumenten", "Inkl. Lernkarten", "Inkl. Multiple-Choice-Tests", "Inkl. Zusammenfassungen"]}
                      highlight={false}
                      ref={refPrice1}
                  >
                      <p>
                      Erhalte <strong> 100 Credits</strong>* zum automatischen Erstellen von Lernplänen samt zugehörigen Lernmaterialien (Lernkarten, Multiple-Choice-Fragen, Zusammenfassungen etc.) für beliebige Dokumente. <br/>
                          <small>Dieses Produkt kann mehrmals erworben werden.</small>
                      </p>
                  </PriceCard>

                  <PriceCard
                      headline="Studypack M"
                      price={14.99}
                      link="https://study.stackreps.com/"
                      linktext="Produkt kaufen"
                      points={["1000 Credits", "Für Lernpläne zu beliebigen Dokumenten", "Inkl. Lernkarten", "Inkl. Multiple-Choice-Testsn", "Inkl. Zusammenfassungen"]}
                      discount={25}
                      highlight={false}
                      monthly={false}
                      ref={refPrice3}
                  >
                      <p>
                      Erhalte <strong> 1000 Credits</strong>* zum automatischen Erstellen von Lernplänen samt zugehörigen Lernmaterialien (Lernkarten, Multiple-Choice-Fragen, Zusammenfassungen etc.) für beliebige Dokumente. <br/>
                      <small>Dieses Produkt kann mehrmals erworben werden.</small>
                      </p>
                  </PriceCard>
              </div>
              
              <div className={styles.creditNoteContainer}>
                <small className={styles.creditNote}>*Ein Credit entspricht 1.000 Zeichen (ohne Leerzeichen) aus dem hochgeladenen Dokument. Pro Seite werden mindestens 2 Credits verrechnet. <br/> Für diesen Textinhalt werden Lernplan und Lernmaterialien generiert.</small>
              </div>
      </section>
)
}

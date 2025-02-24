"use client"
import PriceCard from "./PriceCard";
import styles from "../styles/Prices.module.scss";
import useFadeInOnScroll from "./useFadeInOnScroll";

export default function Prices() {
    const refPrice1 = useFadeInOnScroll(300);
    const refPrice2 = useFadeInOnScroll(0);
    const refPrice3 = useFadeInOnScroll(300);

  return (
      <section id="prices" className="prices container">
          <div className="grid">
              <div className="title g-col-12 g-col-lg-7 g-col-xl-5">
                  <h2>Preise und Abos</h2>
                  <p>
                      Wähle das passende Paket für deine Lernziele: Ob kleine Lernhilfen, umfangreiches Material oder
                      ein flexibles Abo – wir haben ein Angebot für dich.
                  </p>
              </div>
          </div>
              <div className={styles.pricesGrid + " grid"}>
                  <PriceCard
                      headline="Lernmaterialien Klein"
                      price={1.99}
                      link="https://study.stackreps.com/"
                      linktext="Produkt kaufen"
                      points={["100 Lernkarten", "Multiple-Choice-Fragen inklusive"]}
                      highlight={false}
                      ref={refPrice1}
                  >
                      <p>
                          Erhalte <strong>100 automatisch generierte Lernkarten</strong> inklusive passender
                          Multiple-Choice-Fragen
                          zu deinen hochgeladenen Dokumenten.<br/>
                          <small>Das Produkt kann mehrfach gekauft werden.</small>
                      </p>
                  </PriceCard>
                  <PriceCard
                      headline="Lernmaterialien Groß"
                      price={14.99}
                      link="https://study.stackreps.com/"
                      linktext="Produkt kaufen"
                      points={["1.000 Lernkarten", "Multiple-Choice-Fragen inklusive"]}
                      discount={25}
                      highlight={true}
                      ref={refPrice2}
                  >
                      <p>
                          Erhalte <strong>1.000 automatisch generierte Lernkarten</strong> inklusive passender
                          Multiple-Choice-Fragen
                          zu deinen hochgeladenen Dokumenten. <br/>
                          <small>Das Produkt kann mehrfach gekauft werden.</small>
                      </p>
                  </PriceCard>
                  <PriceCard
                      headline="Studenten Abo"
                      price={8.99}
                      link="https://study.stackreps.com/"
                      linktext="Plan abonnieren"
                      points={["500 Lernkarten", "Multiple-Choice-Fragen inklusive", "10 Buchkapitel"]}
                      discount={55}
                      highlight={false}
                      monthly={true}
                      ref={refPrice3}
                  >
                      <p>
                          Ein monatliches Abo speziell für Studenten. Enthalten sind <strong>500
                          Lernkarten</strong> inklusive
                          passender Multiple-Choice-Fragen und Zugriff auf <strong>10 Buchkapitel</strong>.
                      </p>
                  </PriceCard>
              </div>
      </section>
)
}

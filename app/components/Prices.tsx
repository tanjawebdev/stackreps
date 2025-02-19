import PriceCard from "./PriceCard";

export default function Prices() {
  return (
      <section id="prices" className="prices container">
          <div className="grid">
              <div className="title g-col-md-5">
                  <h2>Preise und Abos</h2>
                  <p>
                      Wähle das passende Paket für deine Lernziele: Ob kleine Lernhilfen, umfangreiches Material oder
                      ein flexibles Abo – wir haben ein Angebot für dich.
                  </p>
              </div>
          </div>
              <div className="grid">
                  <PriceCard
                      headline="Lernmaterialien Klein"
                      price={1.99}
                      link="https://study.stackreps.com/"
                      linktext="Produkt kaufen"
                      points={["100 Lernkarten", "Multiple-Choice-Fragen inklusive"]}
                      highlight={false}
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
                      highlight={true} // Assuming this is a featured/highlighted card
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

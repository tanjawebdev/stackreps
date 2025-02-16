import PriceCard from "./PriceCard";

export default function Prices() {
  return (
    <section className="prices container">
        <div className="grid">
            <PriceCard
                headline="Lernmaterialien Klein"
                price={1.99}
                link="/"
                linktext="Produkt kaufen"
                points={["100 Lernkarten", "Multiple-Choice-Fragen inklusive"]}
                discount={25}
                highlight={false}
            >
                <p>
                    Erhalte <strong>100 automatisch generierte Lernkarten</strong> inklusive passender Multiple-Choice-Fragen
                    zu deinen hochgeladenen Dokumenten.
                </p>
                <small>Das Produkt kann mehrfach gekauft werden.</small>
            </PriceCard>
            <PriceCard
                headline="Lernmaterialien Groß"
                price={14.99}
                link="/"
                linktext="Produkt kaufen"
                points={["1.000 Lernkarten", "Multiple-Choice-Fragen inklusive"]}
                discount={25}
                highlight={true} // Assuming this is a featured/highlighted card
            >
                <p>
                    Erhalte <strong>1.000 automatisch generierte Lernkarten</strong> inklusive passender Multiple-Choice-Fragen
                    zu deinen hochgeladenen Dokumenten.
                </p>
                <small>Das Produkt kann mehrfach gekauft werden.</small>
            </PriceCard>
            <PriceCard
                headline="Studenten Abo"
                price={8.99}
                link="/"
                linktext="Plan abonnieren"
                points={["500 Lernkarten", "Multiple-Choice-Fragen inklusive", "10 Buchkapitel"]}
                discount={55}
                highlight={false}
            >
                <p>
                    Ein monatliches Abo speziell für Studenten. Enthalten sind <strong>500 Lernkarten</strong> inklusive
                    passender Multiple-Choice-Fragen und Zugriff auf <strong>10 Buchkapitel</strong>.
                </p>
            </PriceCard>
        </div>
    </section>
  )
}

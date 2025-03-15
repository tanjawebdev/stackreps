"use client"
import HowToCard from "./HowToCard";
import useFadeInOnScroll from "../utils/useFadeInOnScroll";

export default function HowToSections() {
    const refCard1 = useFadeInOnScroll(0, 0);
    const refCard2 = useFadeInOnScroll(200, 0);
    const refCard3 = useFadeInOnScroll(400, 0);


    return (
    <section id="features" className="how-to-sections container">
        <div className="grid">
            <div className="title g-col-12 g-col-lg-7 g-col-xl-5">
                <h2>So funktioniert‘s</h2>
                <p>In nur drei Schritten kannst du deine Prüfungsvorbereitung starten und den für dich individuell
                    erstellten Lernplan erhalten.</p>
            </div>
            <div className="card-section grid g-col-12">
                <HowToCard ref={refCard1} icon="pdf" headline="Unterlagen hochladen" description="Lade deinen Lernstoff als PDF hoch." />
                <HowToCard ref={refCard2} icon="calender" headline="Prüfungsdatum angeben" description="Gib das Datum deiner Prüfung an, damit wir deine Lerneinheiten so anpassen können, dass du den Lernstoff zum Prüfungstag bestmöglich beherrschst." />
                <HowToCard ref={refCard3} icon="cards" headline="Lernmaterialien erhalten" description="Erhalte mit AI erstellte Karteikarten, Tests und Zusammenfassungen, die auf deinen Lernstoff abgestimmt sind. Unsere Lernalgorithmen sorgen dafür, dass du dir die Inhalte so effizient wie möglich aneignen kannst." />
            </div>
        </div>
    </section>
  )
}

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
                <h2>So funktionierts</h2>
                <p>In nur drei Schritten kannst du deine Prüfungsvorbereitung starten und den für dich individuell
                    erstellten Lernplan erhalten.</p>
            </div>
            <div className="card-section grid g-col-12">
                <HowToCard ref={refCard1} icon="pdf" headline="Unterlagen hochladen" description="Lade einfach deine Lernunterlagen zum Beispiel als PDF hoch. Unsere AI analysiert den Inhalt und bereitet ihn für dich auf." />
                <HowToCard ref={refCard2} icon="calender" headline="Prüfungsdatum angeben" description="Gib das Datum deiner Prüfung an, und Stockreps erstellt dir einen optimalen Lernplan, der sicherstellt, dass du bis zum Prüfungstag bestens vorbereitet bist." />
                <HowToCard ref={refCard3} icon="cards" headline="Lernmaterialien erhalten" description="Erhalte automatisch generierte Karteikarten und Quizfragen, die auf deine Prüfungsinhalte abgestimmt sind. Unsere intelligenten Lernalgorithmen sorgen dafür, dass die Inhalte regelmäßig wiederholt und vertieft werden." />
            </div>
        </div>
    </section>
  )
}

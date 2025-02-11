import Link from "next/link";

export default function Heading() {
  return (
    <section className="heading container">
      <span className="summary">
        Effizient lernen, leicht bestehen
      </span>
      <h1>Mit AI zum Lernerfolg</h1>
      <p className="heading-subtitle">
        Karteikarten, Tests und der optimale Lernplan angepasst auf deine Prüfung.
      </p>
      <div className="heading-buttons">
        <Link href="/">Kostenlos Registrieren</Link>
        <Link href="/">So funktionierts</Link>
      </div>
    </section>
  )
}

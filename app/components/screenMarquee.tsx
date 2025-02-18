import styles from '../styles/ScreenMarquee.module.scss';

export default function ScreenMarquee() {
  return (
    <section className={styles.screenMarquee + " container-fluid"}>
        <div className={styles.marquee}></div>
        <div className={styles.lightspot + " spot"}></div>
    </section>
  )
}

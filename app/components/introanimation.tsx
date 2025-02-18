import styles from '../styles/IntroAnimation.module.scss';

export default function IntroAnimation() {
  return (
      <section className={styles.introAnimation + " container-fluid"}>
          <div className={styles.cardAnimation}></div>
          <div className={styles.lightspot + " spot"}></div>
      </section>
  )
}

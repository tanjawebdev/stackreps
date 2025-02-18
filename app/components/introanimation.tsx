"use client"

import styles from '../styles/IntroAnimation.module.scss';
import {useEffect} from "react";

export default function IntroAnimation() {
    useEffect(() => {
        // Load Spline script dynamically
        const script = document.createElement("script");
        script.type = "module";
        script.src = "https://unpkg.com/@splinetool/viewer@1.9.66/build/spline-viewer.js";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Cleanup on unmount
        };
    }, []);

  return (
      <section className={styles.introAnimation + " container-fluid"}>
          <div className={styles.cardAnimation}>
              <spline-viewer url="https://prod.spline.design/Qq0Pcq6S2pPLYNhR/scene.splinecode"></spline-viewer>
          </div>
          <div className={styles.lightspot + " spot"}></div>
      </section>
  )
}

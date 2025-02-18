"use client"

import { useEffect, useState } from "react";
import styles from "../styles/ScreenMarquee.module.scss";

const images = Array.from({ length: 8 }, (_, i) => `/images/marquee/image${i + 1}.png`);

export default function ScreenMarquee() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className={`${styles.screenMarquee} container-fluid`}>
            <div className={styles.marquee}>
                <div className={styles.row} style={{ transform: `translateX(${scrollY * -0.1}px)` }}>
                    {images.slice(0, 4).map((src, index) => (
                        <img key={index} src={src} alt={`Marquee ${index + 1}`} className={styles.image} />
                    ))}
                </div>

                <div className={styles.row + " " + styles.row2} style={{ transform: `translateX(${scrollY * 0.1}px)` }}>
                    {images.slice(4, 8).map((src, index) => (
                        <img key={index} src={src} alt={`Marquee ${index + 5}`} className={styles.image} />
                    ))}
                </div>
            </div>
            <div className={`${styles.lightspot} spot`}></div>
        </section>
    );
}
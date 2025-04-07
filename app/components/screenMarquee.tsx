"use client";

import { useEffect, useRef } from "react";
import styles from "../styles/ScreenMarquee.module.scss";

const images = Array.from({ length: 8 }, (_, i) => `/images/marquee/image${i + 1}.jpeg`);

export default function ScreenMarquee() {
    const row1Ref = useRef<HTMLDivElement>(null);
    const row2Ref = useRef<HTMLDivElement>(null);
    const lastScrollY = useRef(0);


    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            lastScrollY.current = window.scrollY;

            if (!ticking) {
                ticking = true;
                requestAnimationFrame(() => {
                    if (row1Ref.current && row2Ref.current) {
                        row1Ref.current.style.transform = `translateX(${lastScrollY.current * -0.1}px)`;
                        row2Ref.current.style.transform = `translateX(${lastScrollY.current * 0.1}px)`;
                    }
                    ticking = false;
                });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className={`${styles.screenMarquee} container-fluid`}>
            <div className={styles.marquee}>
                <div ref={row1Ref} className={styles.row}>
                    {images.slice(0, 4).map((src, index) => (
                        <img key={index} src={src} alt={`Marquee ${index + 1}`} className={styles.image} />
                    ))}
                </div>

                <div ref={row2Ref} className={`${styles.row} ${styles.row2}`}>
                    {images.slice(4, 8).map((src, index) => (
                        <img key={index} src={src} alt={`Marquee ${index + 5}`} className={styles.image} />
                    ))}
                </div>
            </div>
            <div className={`${styles.lightspot} spot`}></div>
        </section>
    );
}
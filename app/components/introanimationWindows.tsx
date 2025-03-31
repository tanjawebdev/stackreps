"use client";

import styles from "../styles/IntroAnimationWindows.module.scss";
import React, {useEffect, useRef, useState} from "react";

export default function IntroAnimationWindows() {
    const scrollY = useRef(0);
    const cardsRef = useRef<HTMLDivElement | null>(null); // Reference to the parent section
    const [rotationY, setRotationY] = useState(0);

    const applyTransform = () => {
        if (cardsRef.current) {
            cardsRef.current.style.transform = `scale(${1 + scrollY.current * 0.0003}) rotateX(-${scrollY.current * 0.01}deg) rotateY(${rotationY}deg) translateY(${-scrollY.current * 0.1}px)`;
        }
    };

    // Mouse move handler to update rotationY
    const handleMouseMove = (event: MouseEvent) => {
        const { clientX } = event;
        const innerWidth = window.innerWidth;

        // Map X position to range -3deg to 3deg
        const mappedRotation = ((clientX / innerWidth) * 6) - 3;
        setRotationY(mappedRotation);
        applyTransform();
    };

    // Scroll handler to update scrollY
    const handleScroll = () => {
        scrollY.current = window.scrollY;
        applyTransform();
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [rotationY]);



    return (
        <section
            className={styles.introAnimation + " container-fluid"}
        >
            <div className={styles.cardAnimation} ref={cardsRef}>
                {[...Array(7)].map((_, index) => (
                    <img
                        key={index}
                        src={`/images/animation/${index + 1}.png`}
                        alt={`Frame ${index + 1}`}
                        className={`${styles.animationImage} ${styles[`image-${index}`] || ""}`}
                    />
                ))}

            </div>
            <div className={styles.lightspot + " spot"}></div>
        </section>
    );
}
"use client";

import styles from "../styles/IntroAnimation.module.scss";
import React, {useEffect, useRef, useState} from "react";

export default function IntroAnimation() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const script = document.createElement("script");
        script.type = "module";
        script.src = "https://unpkg.com/@splinetool/viewer@1.9.66/build/spline-viewer.js";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        const splineViewer = document.querySelector("spline-viewer");

        if (splineViewer) {
            customElements.whenDefined("spline-viewer").then(() => {
                const shadowRoot = splineViewer.shadowRoot;
                if (shadowRoot) {
                    const logo = shadowRoot.querySelector("#logo");
                    if (logo) {
                        const logoElement = logo as HTMLElement;

                        logoElement.style.right = "-112px";
                        logoElement.style.transition = "0.2s ease right";
                        logoElement.onmouseover = () => {
                            logoElement.style.right = "0px";
                        };
                        logoElement.onmouseout = () => {
                            logoElement.style.right = "-112px";
                        };
                    }
                } else {
                    console.warn("Shadow root not available yet");
                }
            });
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className={styles.introAnimation + " container-fluid"}>
            <div className={styles.cardAnimation} style={{ transform: `scale(${1 + scrollY * 0.0003}) translateY(${-scrollY * 0.1}px)` }}>
                {React.createElement("spline-viewer", {
                    url: "https://prod.spline.design/Qq0Pcq6S2pPLYNhR/scene.splinecode", "events-target": "global"
                })}
            </div>
            <div className={styles.lightspot + " spot"}></div>
        </section>
    );
}
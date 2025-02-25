"use client";

import styles from "../styles/IntroAnimation.module.scss";
import React, { useEffect, useRef } from "react";

export default function IntroAnimation() {
    const scrollY = useRef(0);
    const splineViewerRef = useRef<HTMLDivElement | null>(null); // Ref for the spline viewer

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
        const handleScroll = () => {
            scrollY.current = window.scrollY;
            if (!splineViewerRef.current) return;

            // Get the spline-viewer element
            const splineViewer = splineViewerRef.current.querySelector("spline-viewer");
            if (!splineViewer) return;

            // Wait until the custom element is defined
            customElements.whenDefined("spline-viewer").then(() => {
                const shadowRoot = splineViewer.shadowRoot;
                if (!shadowRoot) return;

                // Select the <canvas> inside shadowRoot
                const canvas = shadowRoot.querySelector("canvas");
                if (canvas) {
                    // Apply transform styles
                    canvas.style.transform = `scale(${1 + scrollY.current * 0.0003}) translateY(${-scrollY.current * 0.1}px)`;
                }

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
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className={styles.introAnimation + " container-fluid"}>
            <div ref={splineViewerRef} className={styles.cardAnimation}>
                {React.createElement("spline-viewer", {
                    url: "https://prod.spline.design/Qq0Pcq6S2pPLYNhR/scene.splinecode", "events-target": "global"
                })}
            </div>
            <div className={styles.lightspot + " spot"}></div>
        </section>
    );
}
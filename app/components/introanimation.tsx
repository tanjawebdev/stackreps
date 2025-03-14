"use client";

import styles from "../styles/IntroAnimation.module.scss";
import React, { useEffect, useRef, useState } from "react";
import useScreenSize from "../utils/useScreenSize";

export default function IntroAnimation() {
    const scrollY = useRef(0);
    const splineViewerRef = useRef<HTMLDivElement | null>(null);
    const isMobile = useScreenSize();

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const logoRef = useRef<HTMLElement | null>(null);

    const handleScroll = () => {
        scrollY.current = window.scrollY;

        if (canvasRef.current) {
            const zoomFactor = isMobile ? 0.3 : 0;
            canvasRef.current.style.transform = `scale(${1 + scrollY.current * 0.0003 + zoomFactor}) translateY(${-scrollY.current * 0.1}px)`;
        }
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.type = "module";
        script.src = "https://unpkg.com/@splinetool/viewer@1.9.66/build/spline-viewer.js";
        document.body.appendChild(script);

        const getCanvas = () => {
            const splineViewer = splineViewerRef.current?.querySelector("spline-viewer");

            if (!splineViewer) return;

            customElements.whenDefined("spline-viewer").then(() => {
                const shadowRoot = splineViewer.shadowRoot;
                if (!shadowRoot) return;

                const canvas = shadowRoot.querySelector("canvas") as HTMLCanvasElement;
                canvasRef.current = canvas;
                if (canvas) {
                    canvas.style.pointerEvents = "none";
                }

                const logoElement = shadowRoot.querySelector("#logo") as HTMLElement;
                if (logoElement) {
                    logoRef.current = logoElement;

                    logoElement.style.right = "-112px";
                    logoElement.style.transition = "0.2s ease right";

                    logoElement.onmouseover = () => (logoElement.style.right = "0px");
                    logoElement.onmouseout = () => (logoElement.style.right = "-112px");
                }
            });
        };

        getCanvas(); // Run once after mounting

        const handleScrollThrottled = () => requestAnimationFrame(handleScroll);
        window.addEventListener("scroll", handleScrollThrottled);

        return () => {
            document.body.removeChild(script);
            window.removeEventListener("scroll", handleScrollThrottled);
        };
    }, [isMobile]);

    return (
        <section className={styles.introAnimation + " container-fluid"}>
            <div ref={splineViewerRef} className={styles.cardAnimation}>
                {React.createElement("spline-viewer", {
                    url: "https://prod.spline.design/Qq0Pcq6S2pPLYNhR/scene.splinecode",
                    "events-target": "global"
                })}
            </div>
            <div className={styles.lightspot + " spot"}></div>
        </section>
    );
}
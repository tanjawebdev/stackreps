"use client";

import styles from "../styles/IntroAnimation.module.scss";
import React, { useEffect, useRef, useState } from "react";
import useScreenSize from "../utils/useScreenSize";

export default function IntroAnimation() {
    const scrollY = useRef(0);
    const sectionRef = useRef<HTMLElement | null>(null); // Reference to the parent section
    const splineViewerRef = useRef<HTMLDivElement | null>(null);
    const isMobile = useScreenSize();
    const [isVisible, setIsVisible] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const logoRef = useRef<HTMLElement | null>(null);
    const [isCanvasReady, setIsCanvasReady] = useState(false);

    const handleScroll = () => {
        scrollY.current = window.scrollY;

        if (canvasRef.current) {
            const zoomFactor = isMobile ? 0.3 : 0;
            canvasRef.current.style.transform = `scale(${1 + scrollY.current * 0.0003 + zoomFactor}) translateY(${-scrollY.current * 0.1}px)`;
        }
    };

    const getCanvas = () => {
        console.log("Initializing Spline viewer...");
        const splineViewer = splineViewerRef.current?.querySelector("spline-viewer");
        if (!splineViewer) return;

        customElements.whenDefined("spline-viewer").then(() => {
            const shadowRoot = splineViewer.shadowRoot;
            if (!shadowRoot) return;

            const canvas = shadowRoot.querySelector("canvas") as HTMLCanvasElement;
            canvasRef.current = canvas;
            if (canvas) {
                canvas.style.pointerEvents = "none";
                setTimeout(() => {
                    canvas.setAttribute('height', canvas.clientHeight.toString());
                    if (canvasRef.current) {
                        canvasRef.current.style.minHeight = "50vw";
                    }
                }, 100);
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

        const handleLoadComplete = (event: CustomEvent) => {
            setIsCanvasReady(true);
        }
        splineViewer.addEventListener("load-complete", handleLoadComplete);

        return () => {
            splineViewer.removeEventListener("load-complete", handleLoadComplete);
        };
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.type = "module";
        script.src = "https://unpkg.com/@splinetool/viewer@1.9.66/build/spline-viewer.js";
        document.body.appendChild(script);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                        setIsCanvasReady(false);
                    }
                });
            },
            {
                root: null,
                rootMargin: "100px",
                threshold: 0
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        const handleScrollThrottled = () => requestAnimationFrame(handleScroll);
        window.addEventListener("scroll", handleScrollThrottled);

        return () => {
            document.body.removeChild(script);
            window.removeEventListener("scroll", handleScrollThrottled);
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [isMobile]);

    useEffect(() => {
        if (isVisible) {
            getCanvas();
        }
    }, [isVisible]);

    return (
        <section
            ref={sectionRef}
            className={styles.introAnimation + " container-fluid"}
        >
            <div
                ref={splineViewerRef}
                className={`${styles.cardAnimation} ${isVisible && isCanvasReady ? styles.open : ''}`}
            >
                {isVisible &&
                    React.createElement("spline-viewer", {
                    url: "https://prod.spline.design/Qq0Pcq6S2pPLYNhR/scene.splinecode",
                    "events-target": "global",
                     "unloadable": "true"
                    })
                }
            </div>
            <div className={styles.lightspot + " spot"}></div>
        </section>
    );
}
"use client";

import styles from "../styles/IntroAnimationWindows.module.scss";
import React, { useEffect, useRef, useState } from "react";

export default function IntroAnimationWindows() {
    return (
        <section
            className={styles.introAnimation + " container-fluid"}
        >
            <div
                className={`${styles.cardAnimation}`}
            >
                <h2>Windows</h2>
            </div>
            <div className={styles.lightspot + " spot"}></div>
        </section>
    );
}
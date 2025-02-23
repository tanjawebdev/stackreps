import React from "react";
import { pdf, calender, cards } from "./svgIcons";
import styles from "../styles/HowToCard.module.scss";

const iconMap: { [key: string]: React.FC } = {
    pdf: pdf,
    calender: calender,
    cards: cards
};

interface HowToCardProps {
    icon?: "pdf" | "calender" | "cards";
    headline: string;
    description: string;
}

export default function HowToCard(probs: HowToCardProps ) {
    const IconComponent = probs.icon ? iconMap[probs.icon] : null;

    return (
        <div className={styles.howToCard + " cards g-col-12 g-col-md-4"}>
            <div className={styles.toppart}>
                {IconComponent && (
                    <div className={styles.icon + " g-col-3 g-col-md-12"}>
                        <IconComponent/>
                    </div>
                )}
                <h3>{probs.headline}</h3>
            </div>
            <hr/>
            <p>{probs.description}</p>
        </div>
    )
}

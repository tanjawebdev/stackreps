import React, {forwardRef} from "react";
import { pdf, calender, cards } from "./svgIcons";
import styles from "../styles/HowToCard.module.scss";

const iconMap: { [key: string]: React.FC } = {
    pdf: pdf,
    calender: calender,
    cards: cards
};

interface HowToCardProps {
    ref?: React.RefObject<HTMLDivElement>;
    icon?: "pdf" | "calender" | "cards";
    headline: string;
    description: string;
}

const HowToCard = forwardRef<HTMLDivElement, HowToCardProps>(
    ({ icon, headline, description }, ref) => {
        const IconComponent = icon ? iconMap[icon] : null;

        return (
            <div ref={ref} className={styles.howToCard + " cards g-col-12 g-col-lg-4 fade-in"}>
                <div className={styles.toppart}>
                    {IconComponent && (
                        <div className={styles.icon + " g-col-3 g-col-lg-12"}>
                            <IconComponent />
                        </div>
                    )}
                    <h3>{headline}</h3>
                </div>
                <hr />
                <p>{description}</p>
            </div>
        );
    }
);

export default HowToCard;

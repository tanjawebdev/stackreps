import React, {ReactNode , forwardRef} from "react";
import {Checkmark} from "./svgIcons";
import styles from "../styles/PriceCard.module.scss";
import Button from "./Button";

interface PriceCardProps {
    headline: string;
    price: number;
    discount?: number;
    link: string;
    linktext: string;
    children: ReactNode;
    points?: string[];
    highlight?: boolean;
    monthly?: boolean;
    ref?: React.RefObject<HTMLDivElement>;
}

const PriceCard = forwardRef<HTMLDivElement, PriceCardProps>(
    ({ headline, price, discount, link, linktext, children, points, highlight, monthly }, ref) => {
    return (
        <div ref={ref} className={`${styles.priceCard} cards fade-in g-col-12 g-col-lg-4 ${highlight ? styles.highlightcard : ""}`}>
            {discount ? <span className={styles.discount}>{discount}% Rabatt</span> : ""}
            <h3>{headline}</h3>
            <div className={styles.priceDescription}>{children}</div>

            <p className={styles.pricecontainer}>
                <span className={styles.euro}>€</span>
                <span className={styles.price}>{price ? price.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "--"}</span>
                {monthly ? <span className={styles.monthly}><span>/ Monat</span></span> : ""}
            </p>
            <Button className={styles.button} href={link} variant={highlight ? "light" : "outline-light"} icon="arrow" size="sm">{linktext}</Button>

            {points && (
                <ul className="features">
                    {points.map((point, index) => (
                        <li key={index}>
                            <Checkmark />
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
});

export default PriceCard;
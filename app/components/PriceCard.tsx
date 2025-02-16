import React, {ReactNode} from "react";
import {ArrowIcon} from "./svgIcons";
import styles from "../styles/PriceCard.module.scss";
import Button from "./Button";

interface PriceCardProps {
    headline: string;
    price: number;
    discount: number;
    link: string;
    linktext: string;
    children: ReactNode;
    points?: string[];
    highlight: boolean;
}

export default function PriceCard({ headline, price, discount, link, linktext, children, points, highlight }: PriceCardProps) {
    return (
        <div className={`${styles.priceCard} cards g-col-12 g-col-md-4 ${highlight ? "highlight" : ""}`}>
            <span className="discount">{discount}% Rabatt</span>
            <h3>{headline}</h3>
            <div className="priceDescription">{children}</div>

            <p className="price">€{price ? price.toFixed(2) : "--"}</p>
            <Button href={link} variant={highlight ? "light" : "outline-light"}>{linktext}</Button>
            <ArrowIcon />

            {points && (
                <ul className="features">
                    {points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

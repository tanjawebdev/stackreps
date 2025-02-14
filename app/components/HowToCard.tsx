import React from "react";
import {ArrowIcon} from "./svgIcons";

interface HowToCardProps {
    icon?: string;
    headline: string;
    description: string;
}

export default function HowToCard(probs: HowToCardProps ) {
  return (
    <div className="howToCard g-col-md-4">
        {probs.icon}
        <h3>{probs.headline}</h3>
        <p>{probs.description}</p>

        <ArrowIcon />
    </div>
  )
}

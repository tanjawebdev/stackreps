import React from "react";
import Link from "next/link";
import {ArrowIcon, calender, cards, pdf} from "./svgIcons";

const iconMap: { [key: string]: React.FC } = {
    pdf: pdf,
    calender: calender,
    cards: cards,
    arrow: ArrowIcon
};

interface ButtonProps {
    variant?: string; // Bootstrap variant like "primary", "outline-secondary"
    size?: "sm" | "lg"; // Bootstrap sizes
    className?: string; // Custom classes
    href?: string; // If it's a link
    onClick?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
    icon?: string;
}

const Button: React.FC<ButtonProps> = ({
                                           variant = "primary",
                                           size,
                                           className = "",
                                           href,
                                           onClick,
                                           disabled = false,
                                           children,
                                            icon
                                       }) => {
    const bootstrapClass = `btn btn-${variant} ${size ? `btn-${size}` : ""} ${className}`;
    const IconComponent = icon ? iconMap[icon] : null;

    return href ? (
        <Link href={href} passHref legacyBehavior>
            <a className={bootstrapClass} role="button">
                <span>{children}</span>
                {IconComponent && (
                    <div className="button-icon">
                        <IconComponent/>
                    </div>
                )}
            </a>
        </Link>
    ) : (
        <button className={bootstrapClass} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
import React from "react";
import Link from "next/link";

interface ButtonProps {
    variant?: string; // Bootstrap variant like "primary", "outline-secondary"
    size?: "sm" | "lg"; // Bootstrap sizes
    className?: string; // Custom classes
    href?: string; // If it's a link
    onClick?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
                                           variant = "primary",
                                           size,
                                           className = "",
                                           href,
                                           onClick,
                                           disabled = false,
                                           children,
                                       }) => {
    const bootstrapClass = `btn btn-${variant} ${size ? `btn-${size}` : ""} ${className}`;

    return href ? (
        <Link href={href} passHref legacyBehavior>
            <a className={bootstrapClass} role="button">
                {children}
            </a>
        </Link>
    ) : (
        <button className={bootstrapClass} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
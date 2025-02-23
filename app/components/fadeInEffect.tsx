import { useEffect, useRef } from "react";

const FadeInSection = ({ children }) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            },
            { threshold: 0.4 } // Trigger when x% of the element is visible
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="fade-in">
            {children}
        </div>
    );
};

export default FadeInSection;
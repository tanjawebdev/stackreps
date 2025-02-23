import { useEffect, useRef } from "react";

const useFadeInOnScroll = (delay = 0) => {
    const ref = useRef<HTMLDivElement | null>(null);

    console.log(delay + " " + ref.current);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            },
            { threshold: 0.4 }
        );

        if (ref.current) {
            setTimeout(() => observer.observe(ref.current!), delay);
        }

        return () => observer.disconnect();
    }, [delay]);

    return ref;
};

export default useFadeInOnScroll;
import { useEffect, useRef } from "react";
import useScreenSize from "./useScreenSize";


const useFadeInOnScroll = (desktopDelay = 0, mobileDelay = 0) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isMobile = useScreenSize();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const delay = isMobile ? mobileDelay : desktopDelay;
                    setTimeout(() => entry.target.classList.add("visible"), delay);
                } else {
                    entry.target.classList.remove("visible");
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [desktopDelay, mobileDelay, isMobile]);

    return ref;
};

export default useFadeInOnScroll;
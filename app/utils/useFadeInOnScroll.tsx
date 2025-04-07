import { useEffect, useRef } from "react";
import useScreenSize from "./useScreenSize";

const useFadeInOnScroll = (desktopDelay = 0, mobileDelay = 0) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isMobile = useScreenSize();

    useEffect(() => {
        const element = ref.current;
        const parent = element?.parentElement;

        if (!element || !parent) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const delay = isMobile ? mobileDelay : desktopDelay;
                    setTimeout(() => element.classList.add("visible"), delay);
                } else {
                    element.classList.remove("visible");
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(parent);

        return () => observer.disconnect();
    }, [desktopDelay, mobileDelay, isMobile]);

    return ref;
};

export default useFadeInOnScroll;
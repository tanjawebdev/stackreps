"use client";
import { useState, useEffect } from 'react';
import Heading from "./components/heading";
import IntroAnimation from "./components/introanimation";
import IntroAnimationWindows from "./components/introanimationWindows";
import IntroText from "./components/introText";
import ScreenMarquee from "./components/screenMarquee";
import HowToSections from "./components/howToSections";
import CtaSection from "./components/CtaSection";
import Prices from "./components/Prices";
import Vision from "./components/Vision";
import useScreenSize from "./utils/useScreenSize";

export default function Page() {
    const [isMacOS, setIsMacOS] = useState<boolean | null>(null);
    const isMobile = useScreenSize();

    useEffect(() => {
        setIsMacOS(/Mac/i.test(navigator.userAgent));
    }, []);

    if (isMacOS === null) {
        return null;
    }

    const IntroComponent = isMobile || !isMacOS ? IntroAnimationWindows : IntroAnimation;


    return (
     <>
        <Heading />
        <IntroComponent />
        <IntroText />
        <ScreenMarquee />
        <HowToSections />
        <CtaSection />
        <Prices />
        <Vision />
     </>
  )
}

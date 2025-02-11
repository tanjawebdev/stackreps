import { BlogPosts } from 'app/components/posts'
import Heading from "./components/heading";
import IntroAnimation from "./components/introanimation";
import IntroText from "./components/introText";
import ScreenMarquee from "./components/screenMarquee";
import HowToSections from "./components/howToSections";
import CtaSection from "./components/CtaSection";
import Prices from "./components/Prices";
import Vision from "./components/Vision";

export default function Page() {
  return (
     <>
        <Heading />
        <IntroAnimation />
        <IntroText />
        <ScreenMarquee />
        <HowToSections />
        <CtaSection />
        <Prices />
        <Vision />
     </>
  )
}

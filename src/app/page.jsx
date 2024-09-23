import Features from "./components/Features";
import Footer from "./components/Footer";

import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Info from "./components/Info";
import MaxWidthWrapper from "./components/MaxWIthWrapper";
import RoadMap from "./components/RoadMap";

export default function Home() {
  return (
    <MaxWidthWrapper className="bg-dot-black/[0.1]">
      <section className="h-full pb-56">
        <HeroSection className="bg-transparent" />

        <Features className="bg-transparent" />

        <Info />
        <RoadMap />
        <HowItWorks />
      </section>
      <Footer />
    </MaxWidthWrapper>
  );
}

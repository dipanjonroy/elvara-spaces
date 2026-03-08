import BrandSection from "./sections/BrandSection";
import ChooseSection from "./sections/ChooseSection";
import HeroSection from "./sections/HeroSection";
import ProjectSection from "./sections/ProjectSection";
import ServiceSection from "./sections/ServiceSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandSection />
      <ServiceSection />
      <ChooseSection />
      <ProjectSection />
    </>
  );
}

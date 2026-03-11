import BeforeAfterSection from "./sections/BeforeAfterSection";
import BrandSection from "./sections/BrandSection";
import ChooseSection from "./sections/ChooseSection";
import HeroSection from "./sections/HeroSection";
import ProcessSection from "./sections/ProcessSection";
import ProjectSection from "./sections/ProjectSection";
import ReviewsSection from "./sections/ReviewsSection";
import ServiceSection from "./sections/ServiceSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandSection />
      <ServiceSection />
      <ChooseSection />
      <ProjectSection />
      <BeforeAfterSection />
      <ProcessSection />
      <ReviewsSection />
    </>
  );
}

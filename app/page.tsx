import AboutSection from "./sections/AboutSection";
import BeforeAfterSection from "./sections/BeforeAfterSection";
import BrandSection from "./sections/BrandSection";
import ChooseSection from "./sections/ChooseSection";
import CTASection from "./sections/CTASection";
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
      <AboutSection/>
      <ServiceSection />
      <ChooseSection />
      <ProjectSection />
      <BeforeAfterSection />
      <ProcessSection />
      <ReviewsSection />
      <CTASection />
    </>
  );
}

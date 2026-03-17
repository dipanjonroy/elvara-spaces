import AboutHeroSection from "./sections/AboutHeroSection";
import type { Metadata } from "next";
import OurStorySection from "./sections/OurStorySection";
import AchievementSection from "./sections/AchievementSection";
import PartnerSection from "./sections/PartnerSection";
import ProcessSection from "../sections/ProcessSection";
import ReviewsSection from "../sections/ReviewsSection";
import CTASection from "../sections/CTASection";

export const metadata: Metadata = {
  title: "About Us | Elvara Spaces",
  description:
    "Learn more about our interior design studio, our story, and how we create spaces that reflect your personality.",
};

export default function AboutUs() {
  return (
    <>
      <AboutHeroSection />
      <OurStorySection />
      <AchievementSection/>
      <PartnerSection/>
      <ProcessSection/>
      <ReviewsSection/>
      <CTASection/>
    </>
  );
}

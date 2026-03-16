import AboutHeroSection from "./sections/AboutHeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Elvara Spaces",
  description:
    "Learn more about our interior design studio, our story, and how we create spaces that reflect your personality.",
};

export default function AboutUs() {
  return (
    <>
      <AboutHeroSection />
    </>
  );
}

import CTASection from "../sections/CTASection";
import ProjectsHeroSection from "./sections/ProjectsHeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Elvara Spaces",
  description:
    "Explore our interior design projects showcasing creative, functional, and beautifully crafted spaces designed to inspire modern living.",
};

export default function page() {
  return (
    <>
      <ProjectsHeroSection />
      <ProjectsSection />
      <CTASection/>
    </>
  );
}

import type { Metadata } from "next";
import ContactHero from "./sections/ContactHero";
import ContactInfo from "@/app/contact-us/sections/ContactInfo";
import CTASection from "../sections/CTASection";

export const metadata: Metadata = {
  title: "Contact us | Elvara Spaces",
  description:
    "Elvara Spaces is a modern interior design service dedicated to creating elegant, functional, and personalized spaces. Our team transforms ideas into beautifully crafted interiors that reflect your lifestyle, blending creativity, comfort, and timeless design in every project.",
};

export default function page() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <CTASection/>
    </>
  );
}

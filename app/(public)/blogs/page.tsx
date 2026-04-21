
import type { Metadata } from "next";
import CTASection from "../sections/CTASection";
import BlogHeroSection from "./sections/BlogHero";
import ArticlesSection from "./sections/BlogArticles";

export const metadata:Metadata = {
  title:"Blogs | Elvara Spaces",
  description:"Discover expert interior design tips, trends, and inspiration to transform your space. Explore ideas, guides, and insights for modern and timeless interiors."
}

export default function page() {
  return (
    <>
      <BlogHeroSection />
      <ArticlesSection/>
      <CTASection/>
    </>
  );
}

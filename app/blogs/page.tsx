import BlogHero from "@/app/blogs/sections/BlogHero";
import BlogArticles from "@/app/blogs/sections/BlogArticles";
import type { Metadata } from "next";
import CTASection from "../sections/CTASection";

export const metadata:Metadata = {
  title:"Blogs | Elvara Spaces",
  description:"Discover expert interior design tips, trends, and inspiration to transform your space. Explore ideas, guides, and insights for modern and timeless interiors."
}

export default function page() {
  return (
    <>
      <BlogHero />
      <BlogArticles/>
      <CTASection/>
    </>
  );
}

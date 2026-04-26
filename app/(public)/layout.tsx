import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SmoothWrapper from "@/components/provider/SmoothWrapper";
import type { Metadata } from "next";




export const metadata: Metadata = {
  title: "Elvara Spaces | Luxury Residential Interior Design Studio",
  description:
    "Elvara Spaces is a modern interior design studio crafting elegant, functional and fully customized residential interiors tailored to your lifestyle.",
};



export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothWrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </SmoothWrapper>
  );
}
import Header from "@/components/layout/Header";
import SmoothWrapper from "@/components/provider/SmoothWrapper";
import type { Metadata } from "next";
import { Footer } from "react-day-picker";




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
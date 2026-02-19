import type { Metadata } from "next";
import { Host_Grotesk} from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const hostGrotesk = Host_Grotesk({
  variable:"--font-host-grotesk",
  weight:["300","400","500","600","700"],
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "Elvara Spaces | Luxury Residential Interior Design Studio",
  description: "Elvara Spaces is a modern interior design studio crafting elegant, functional and fully customized residential interiors tailored to your lifestyle."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hostGrotesk.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}

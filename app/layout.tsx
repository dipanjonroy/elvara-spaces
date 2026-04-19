import ModalLayout from "@/components/modals/ModalLayout";
import QueryClientWrapper from "@/components/provider/QueryClientWrapper";
import ToastContainer from "@/components/toast/ToastContainer";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${hostGrotesk.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <QueryClientWrapper>
          {children}
          <ToastContainer />
          <ModalLayout />
        </QueryClientWrapper>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import ActiveSectionContextProvider from "@/components/ui/active-section-context";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className="">
        <ActiveSectionContextProvider>
          <main className="z-[999] bg-gray-900 dark:bg-grid-black/[0.02] relative py-20 overflow-hidden">
            <Navbar />
            <main>{children}</main>
            <div className="min-h-screen flex flex-col items-center"></div>
          </main>
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}

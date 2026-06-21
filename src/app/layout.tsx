import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suri Huang — B2B Demand Generation & Growth Marketing",
  description:
    "B2B demand generation and growth marketer with 6+ years building full-funnel pipeline programs across healthcare technology, ABM, lifecycle automation, and marketing-to-sales alignment.",
  keywords: [
    "Demand Generation",
    "Growth Marketing",
    "Healthcare Marketing",
    "B2B Marketing",
    "Suri Huang",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white text-slate-800">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

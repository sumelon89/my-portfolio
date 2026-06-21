import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suri Huang — Growth Marketing & International Business Lead",
  description:
    "B2B demand generation and growth marketer with 6+ years of experience building full-funnel pipeline programs across healthcare technology, ABM, lifecycle automation, and marketing-to-sales alignment.",
  keywords: [
    "Growth Marketing",
    "Demand Generation",
    "Healthcare Marketing",
    "International Growth",
    "Suri Huang",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-surface text-slate-900">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

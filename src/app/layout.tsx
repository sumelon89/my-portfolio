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
    "Growth marketer with 5+ years of experience across healthcare diagnostics, B2B/B2C growth, provider acquisition, sales enablement, and APAC market expansion.",
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

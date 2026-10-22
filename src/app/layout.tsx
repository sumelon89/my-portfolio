import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
import PortfolioChat from "@/components/PortfolioChat";
export const metadata: Metadata={title:{default:"Suri Huang — Marketing Portfolio",template:"%s — Suri Huang"},description:"Suri Huang uses funnel strategy, customer insight, and cross-functional collaboration to solve growth problems across B2B and healthcare marketing."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:`try{document.documentElement.dataset.theme=localStorage.getItem("portfolio-theme")==="light"?"light":"dark"}catch{}`}}/></head><body id="top"><a className="skip-link" href="#main">Skip to content</a><Navbar/><main id="main">{children}</main><Footer/><Motion/><PortfolioChat/></body></html>;}

import WorkSamples from "@/components/WorkSamples";
import Link from "next/link";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import ContactCTA from "@/components/ContactCTA";
import SideProjects from "@/components/SideProjects";
import { ArrowUpRight } from "lucide-react";
export default function Home(){return <><Hero/><FeaturedProjects/><WorkSamples/><SideProjects/><section className="about-teaser wrap section"><div className="about-label"><p className="eyebrow">03 / The person behind the work</p><p>Irvine, CA · Open to hybrid, remote & on-site</p></div><div><h2>Curious about the why<br/><em>Hands-on with the how</em></h2><p>Customer insight, funnel strategy, and hands-on execution.</p><Link className="text-link" href="/about">A little more about me <ArrowUpRight size={20}/></Link></div></section><ContactCTA/></>;}

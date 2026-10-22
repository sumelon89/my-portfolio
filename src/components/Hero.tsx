import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PixelGrowth from "./PixelGrowth";
import SuriAvatar from "./SuriAvatar";
export default function Hero(){return <section className="hero wrap"><div className="hero-copy"><div className="hero-hello">Hi, I’m Suri. <SuriAvatar/></div><h1>I turn funnel <span className="word-gap">gaps</span><br/>into <span className="word-growth">growth<svg viewBox="0 0 210 25" aria-hidden="true"><path d="M3 21h38V17h42v-5h44V7h65M181 2l12 5-10 9"/></svg></span></h1><p className="hero-description">Find the bottleneck. Build the fix. Scale what works.</p><div className="actions"><Link className="button" href="#projects">See it in action <ArrowUpRight size={20}/></Link></div><p className="small-note hero-note">B2B & Healthcare · Irvine, CA</p></div><div className="hero-game"><PixelGrowth/></div></section>}

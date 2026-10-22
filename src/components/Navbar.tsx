"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
const links=[{label:"Home",href:"/"},{label:"Work",href:"/projects"},{label:"Side projects",href:"/#side-projects"},{label:"About",href:"/about"}];
export default function Navbar(){const [open,setOpen]=useState(false);const path=usePathname();return <header className="site-header"><nav className="wrap nav" aria-label="Main navigation"><Link className="brand" href="/" onClick={()=>setOpen(false)} aria-label="Portfolio home"><span className="brand-symbol" aria-hidden="true">↗</span><span className="brand-word">Portfolio</span></Link><button className="menu-toggle" aria-expanded={open} aria-controls="navigation-links" aria-label={open?"Close menu":"Open menu"} onClick={()=>setOpen(!open)}>{open?<X size={21}/>:<Menu size={21}/>}</button><div id="navigation-links" className={`nav-links ${open?"is-open":""}`} onKeyDown={e=>{if(e.key==="Escape")setOpen(false)}}>{links.map(l=><Link key={l.label} href={l.href} onClick={()=>setOpen(false)} aria-current={(l.href==="/"?path==="/":path.startsWith(l.href))?"page":undefined}>{l.label}</Link>)}</div><div className="nav-actions"><ThemeToggle/><Link href="/#contact" className="nav-contact" onClick={()=>setOpen(false)}>Let’s talk <ArrowUpRight size={16}/></Link></div></nav></header>;}

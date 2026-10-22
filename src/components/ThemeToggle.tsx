"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
export default function ThemeToggle(){const [light,setLight]=useState(false);useEffect(()=>{setLight(document.documentElement.dataset.theme==="light");},[]);function toggle(){const next=!light;setLight(next);document.documentElement.dataset.theme=next?"light":"dark";try{localStorage.setItem("portfolio-theme",next?"light":"dark");}catch{}}return <button className="theme-toggle" onClick={toggle} aria-label={light?"Switch to dark mode":"Switch to light mode"} title={light?"Dark mode":"Light mode"}>{light?<Moon size={18}/>:<Sun size={18}/>}</button>;}

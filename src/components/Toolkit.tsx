"use client";
import { useState } from "react";
import { ChartNoAxesCombined, Database, Workflow, Megaphone, Mail, Palette, Code2, Sparkles, PanelsTopLeft, Video, MousePointerClick, Target as TargetIcon } from "lucide-react";
const tools=[
 {name:"HC1",group:"Systems",icon:Database,color:"#9dcbd9",detail:"Healthcare data platform"},
 {name:"Apollo",group:"Systems",icon:TargetIcon,color:"#e8cd82",detail:"Prospecting and contact research"},
 {name:"HubSpot",group:"Systems",icon:Workflow,color:"#f38b62",detail:"Lead scoring, lifecycle workflows & retest reminders"},
 {name:"Salesforce",group:"Systems",icon:Database,color:"#79c6ed",detail:"CRM context & marketing-to-sales alignment"},
 {name:"GA4",group:"Insight",icon:ChartNoAxesCombined,color:"#f5c75f",detail:"Audience behavior, sessions & website engagement"},
 {name:"Tableau",group:"Insight",icon:PanelsTopLeft,color:"#8bc0ec",detail:"Dashboards & performance reporting"},
 {name:"SQL",group:"Insight",icon:Database,color:"#a9a6e4",detail:"Querying and exploring structured data"},
 {name:"Sheets / Excel",group:"Insight",icon:PanelsTopLeft,color:"#85c7aa",detail:"Trackers, analysis & planning models"},
 {name:"Google Ads",group:"Channels",icon:Megaphone,color:"#e7cc77",detail:"Paid search & campaign optimization"},
 {name:"Meta",group:"Channels",icon:Megaphone,color:"#8cb7f1",detail:"Paid social campaigns"},
 {name:"LinkedIn",group:"Channels",icon:UsersIcon,color:"#88b9dd",detail:"B2B audiences & paid social"},
 {name:"TikTok Ads",group:"Channels",icon:Megaphone,color:"#a8d8d6",detail:"Paid social channel execution"},
 {name:"Webinars",group:"Channels",icon:Video,color:"#9dc7df",detail:"Provider education & partner campaigns"},
 {name:"Email",group:"Channels",icon:Mail,color:"#f1cc8b",detail:"Nurture, follow-up & lifecycle campaigns"},
 {name:"Canva / Adobe",group:"Build",icon:Palette,color:"#b3a0e4",detail:"Sales resources & campaign creative"},
 {name:"AI + Code",group:"Build",icon:Code2,color:"#e8d897",detail:"AI-assisted tools, editors & workflow prototypes"},
];
function UsersIcon({size=22}:{size?:number}){return <span className="linkedin-mark" style={{fontSize:size}}>in</span>}
export default function Toolkit(){const [group,setGroup]=useState("All");const [selected,setSelected]=useState("HubSpot");const active=tools.find(t=>t.name===selected)!;return <section className="wrap section toolkit-playground"><div className="section-heading"><div><p className="eyebrow">The toolkit</p><h2>A few things in my inventory</h2></div><span className="toolkit-hint"><MousePointerClick size={16}/> Pick a tool</span></div><div className="toolkit-filters" role="group" aria-label="Filter toolkit">{["All","Insight","Systems","Channels","Build"].map(g=><button key={g} aria-pressed={group===g} onClick={()=>{setGroup(g);if(g!=="All"&&active.group!==g)setSelected(tools.find(t=>t.group===g)!.name)}}>{g}</button>)}</div><div className="inventory-grid">{tools.filter(t=>group==="All"||t.group===group).map(t=><button className={`inventory-item ${selected===t.name?"is-selected":""}`} key={t.name} style={{"--tool-color":t.color} as React.CSSProperties} aria-pressed={selected===t.name} onClick={()=>setSelected(t.name)}><span className="inventory-symbol"><ToolMark name={t.name} fallback={<t.icon size={25}/>}/></span><span>{t.name}</span><i/></button>)}</div><div className="inventory-detail" aria-live="polite"><Sparkles size={20}/><strong>{active.name}</strong><span>{active.detail}</span></div></section>}

function ToolMark({name,fallback}:{name:string;fallback:React.ReactNode}){
 if(name==="Google Ads")return <svg width="29" height="29" viewBox="0 0 32 32" aria-hidden="true"><path d="m16 6 10 19" stroke="#82b1ef" strokeWidth="8" strokeLinecap="round"/><path d="M16 6 6 25" stroke="#edcf77" strokeWidth="8" strokeLinecap="round"/><circle cx="6" cy="25" r="4" fill="#8bc2a8"/></svg>;
 if(name==="Meta")return <span className="meta-mark" aria-hidden="true">∞</span>;
 if(name==="TikTok Ads")return <span className="tiktok-mark" aria-hidden="true">♪</span>;
 if(name==="HubSpot")return <svg width="29" height="29" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><circle cx="20" cy="18" r="6"/><path d="M20 12V5M15 14 7 8M16 23l-7 6"/><circle cx="20" cy="4" r="2"/><circle cx="6" cy="7" r="2"/><circle cx="8" cy="29" r="1.5"/></svg>;
 if(name==="GA4")return <svg width="29" height="29" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><rect x="21" y="3" width="7" height="26" rx="3.5"/><rect x="11" y="12" width="7" height="17" rx="3.5" opacity=".8"/><circle cx="5" cy="25" r="4" opacity=".6"/></svg>;
 return fallback;
}

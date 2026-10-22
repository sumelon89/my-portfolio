"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { workSamples } from "@/data/work-samples";

const toolGroups = [
  { title: "Marketing Performance Dashboard", tag: "Analytics", description: "Performance, planning, and campaign review.", slugs: ["marketing-dashboard"] },
  { title: "Sales Enablement Hub", tag: "Sales Enablement", description: "Training, scripts, and follow-up. One home base.", slugs: ["sales-training-tool"] },
  { title: "Partner Content Editors", tag: "Partner Marketing", description: "One brief. Branded one-pagers and landing pages.", slugs: ["one-pager-editor", "landing-page-editor"] },
];

export default function WorkSamples() {
  const [preview,setPreview]=useState([0,0,0]);
  const featureSets=[["Explore data","Plan scenarios","Review activity"],["Train","Practice","Follow up"],["Brief","Create","Deliver"]];
  const featureNotes=[["Filter orders and compare performance.","Explore transparent budget assumptions.","Connect campaign activity with review notes."],["Keep session resources in one place.","Explore rule-based conversation practice.","Capture personal notes and next actions."],["Start with account context and audience needs.","Edit branded one-pagers and page modules.","Review and export a handoff package."]];
  return <section id="work-samples" className="wrap section sample-section">
    <div className="section-heading"><div><p className="eyebrow">Tools I built</p><h2>Marketing tools, made to work</h2></div><span className="sample-count">3 toolkits</span></div>
    <p className="sample-intro">Three workspaces for clearer decisions, stronger conversations, and better content.</p>
    <div className="sample-grid tool-grid">{toolGroups.map((group, index) => {
      const samples = group.slugs.map(slug => workSamples.find(sample => sample.slug === slug)!);
      const paired = samples.length > 1;
      return <article className={`sample-item tool-item tool-item-${index}`} key={group.title}>
        <Link className={`sample-image demo-window ${paired ? "sample-image-paired" : ""}`} href={`/work-samples/${samples[0].slug}`} aria-label={`View ${group.title}`}>
          <div className="demo-window-bar"><i/><i/><i/><span>{group.title}</span></div>{samples.map(sample => <img key={sample.slug} src={sample.images[(index===0?[1,2,0][preview[index]]:0)%sample.images.length].src} alt={`${sample.title} — demonstration interface`} loading="lazy"/>)}
          {paired && <b className="editor-pair-label">One-pager + Landing page</b>}<div className="demo-hover"><b>{["Find your next move","The sales team’s home base","From brief to ready"][index]}</b><span>Open the walkthrough ↗</span></div>
          <span>View {paired ? "editors" : "tool"} <ArrowUpRight size={18}/></span>
        </Link>
        <div className="demo-feature-tabs" role="group" aria-label={`${group.title} preview`}>{featureSets[index].map((f,j)=><button key={f} aria-pressed={preview[index]===j} onClick={()=>setPreview(p=>p.map((x,k)=>k===index?j:x))}>{f}</button>)}</div><p className="demo-feature-note" aria-live="polite">{featureNotes[index][preview[index]]}</p><div className="sample-copy"><span className={`tool-tag tool-tag-${index}`}>{group.tag}</span><h3><Link href={`/work-samples/${samples[0].slug}`}>{group.title}</Link></h3><p>{group.description}</p><div className="tool-links">{samples.map(sample => <Link key={sample.slug} className="text-link" href={`/work-samples/${sample.slug}`}>{paired ? sample.title : "Explore the tool"} <ArrowUpRight size={17}/></Link>)}</div></div>
      </article>;
    })}</div>
    <p className="sample-disclosure">Walkthroughs use demo content.</p>
  </section>;
}

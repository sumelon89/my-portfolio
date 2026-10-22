import { SlidersHorizontal, Layers, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { workSamples } from "@/data/work-samples";
import SampleGallery from "@/components/SampleGallery";
import ContactCTA from "@/components/ContactCTA";
export function generateStaticParams() { return workSamples.map(sample => ({ slug: sample.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sample = workSamples.find(item => item.slug === slug);
  return { title: sample?.title ?? "Work sample", description: sample?.summary };
}
export default async function SamplePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sample = workSamples.find(item => item.slug === slug);
  if (!sample) notFound();
  const next = workSamples[(workSamples.indexOf(sample) + 1) % workSamples.length];
  return <><article className="wrap sample-detail">
    <header className="page-header"><Link className="text-link" href="/projects#work-samples">← Tools I Built</Link><p className="eyebrow">{sample.category} / Tool I Built</p><h1>{sample.title}</h1><p>{sample.summary}</p><div className="sample-format">Screenshot walkthrough · Demo content</div></header>
    <SampleGallery images={sample.images}/>
    <div className="sample-overview"><section><h2>The purpose</h2><p>{sample.context}</p></section><dl><div><dt>My contribution</dt><dd>{sample.role}</dd></div><div><dt>Designed for</dt><dd>{sample.audience}</dd></div></dl></div>
    <section className="sample-workflow"><h2>How the tool works</h2><ol>{sample.workflow.map(step => <li key={step}>{step}</li>)}</ol></section>
    <section className="sample-capabilities"><h2>Inside the tool</h2><div className="sample-capability-grid">{sample.capabilities.map((capability,i) => {const Icon=[Layers,SlidersHorizontal,CheckCircle2][i%3];return <article key={capability.title}><Icon size={29}/><h3>{capability.title}</h3><p>{capability.description}</p></article>;})}</div></section>
    <section className="sample-notes"><details><summary>Scope and presentation</summary><p>{sample.boundaries}</p></details><details><summary>Data privacy and project credit</summary><p>{sample.privacy}</p><p>{sample.credit}</p></details></section>
    <nav className="sample-related" aria-label="Related work"><Link className="text-link" href={`/projects/${sample.relatedCase}`}>Related case framework ↗</Link><Link className="text-link" href={`/work-samples/${next.slug}`}>Next: {next.title} ↗</Link></nav>
  </article><ContactCTA/></>;
}

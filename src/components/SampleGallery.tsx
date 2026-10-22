"use client";
import { useRef, useState } from "react";
import type { WorkSample } from "@/data/work-samples";
import { Expand, X } from "lucide-react";
export default function SampleGallery({ images }: { images: WorkSample["images"] }) {
  const [selected, setSelected] = useState(0);
  const modal = useRef<HTMLDialogElement>(null);
  const active = images[selected];
  return <div className="sample-gallery">
    {images.length > 1 && <div className="sample-views" role="group" aria-label="Choose a screenshot">{images.map((image, index) => <button key={image.src} aria-pressed={selected === index} onClick={() => setSelected(index)}>{image.title}</button>)}</div>}
    <figure><button className="sample-expand" onClick={() => modal.current?.showModal()} aria-label={`Enlarge ${active.title} screenshot`}><img src={active.src} alt={`${active.title} — demonstration interface`}/><span><Expand size={16}/> View full size</span></button><figcaption>{active.caption}</figcaption></figure>
    <dialog ref={modal} className="sample-lightbox" aria-label={`${active.title} full-size screenshot`} onClick={event => { if (event.target === event.currentTarget) modal.current?.close(); }}>
      <button className="sample-close" onClick={() => modal.current?.close()} aria-label="Close screenshot"><X size={22}/></button><img src={active.src} alt={`${active.title} full-size demonstration interface`}/><p>{active.caption}</p>
    </dialog>
  </div>;
}

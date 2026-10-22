import WorkSamples from "@/components/WorkSamples";
import FeaturedProjects from "@/components/FeaturedProjects";
import ContactCTA from "@/components/ContactCTA";
export const metadata={title:"Work"};
export default function Projects(){return <><header className="wrap page-header compact-work-header"><p className="eyebrow">The work</p><h1>Find the gap<br/>Make the next move</h1><p>Growth strategy, brought to life.</p></header><FeaturedProjects all/><WorkSamples/><ContactCTA/></>;}

import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import BusinessProblems from "@/components/BusinessProblems";
import FeaturedProjects from "@/components/FeaturedProjects";
import SkillsTools from "@/components/SkillsTools";
import AboutPreview from "@/components/AboutPreview";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <BusinessProblems />
      <FeaturedProjects />
      <SkillsTools />
      <AboutPreview />
      <ContactCTA />
    </>
  );
}

import { HeroSection } from "@/components/hero-section";
import { Knowledges } from "@/components/knowledges";
import { ProjectsFeatured } from "@/components/projects-featured";

export default function Home() {
  return (
   <div className="w-full">
    <HeroSection />
    <Knowledges />
    <ProjectsFeatured />
   </div>
  );
}

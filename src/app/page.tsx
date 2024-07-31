import { HeroSection } from "@/components/hero-section";
import { Knowledges } from "@/components/knowledges";
import { ProjectsFeatured } from "@/components/projects-featured";
import { WorkExperience } from "@/components/work-experience";
import { getDataHome } from "@/lib/data";

export default async function Home() {
  const { pages } = await getDataHome();
  const infos = pages[0];

  return (
    <div className="w-full">
      <HeroSection content={infos} />
      <Knowledges techs={infos.knownTechs} />
      <ProjectsFeatured projects={infos.featuredProjects}/>
      <WorkExperience work={infos.workExperience} />
    </div>
  );
}

import { Button } from "@/components/button";
import { SectionTitle } from "@/components/section-title";
import { TechBadge } from "@/components/tech-badge";
import Link from "next/link";
import { FiGlobe } from "react-icons/fi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { TbBrandGithub } from "react-icons/tb";
import { Slideshow } from "./slideshow";
import { getProjectDetail } from "@/lib/data";
import { RichText } from "@/components/rich-text";

interface SlugProps {
  params: {
    slug: string
  }
}

export default async function ProjectDetails({params: { slug }}: SlugProps) {
  const { project } = await getProjectDetail(slug);
  console.log(project.thumbnail.url)

  return (
    <>
      <section className=" default-px w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-[-1]" style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover, url(${project.thumbnail.url})`
        }}/>

        <SectionTitle
          subtitle="Projeto"
          className="text-center items-center sm:[&>h3]:text-4xl"
        >
          {project.title}
        </SectionTitle>
        <div className="text-gray-400 text-center max-w-[640px] mt-4 sm:my-6 text-sm sm:text-base">
          <RichText content={project.description.raw}/>
        </div>
        <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
          {project.technology.map((tech, index) => (
            <TechBadge key={index}>{tech.name}</TechBadge>
          ))}
        </div>
        <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
          {project?.githubUrl && (
            <Link
              target="_blank"
              href={project.githubUrl}
            >
              <Button className="min-w-[180px]">
                <TbBrandGithub size={20} />
                Repositório
              </Button>
            </Link>
          )}
          {project?.liveProjectUrl && (
            <Link
              target="_blank"
              href={project.liveProjectUrl}
            >
              <Button className="min-w-[180px]">
                <TbBrandGithub size={20} />
                Projeto Remoto
              </Button>
            </Link>
          )}
        </div>

        <Link
          className="text-gray-300 text-sm hover:text-emerald-500 transition-colors flex items-center justify-center gap-2 font-saira"
          href='/projects'
        >
          <HiArrowNarrowLeft />
          Voltar para projetos
        </Link>
      </section>
      <Slideshow sections={project.sections} />
    </>
  );
}

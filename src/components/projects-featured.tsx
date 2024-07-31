import Link from "next/link";
import { HorizontalDivider } from "./horizontal-divider";
import { ProjectCard } from "./project-card";
import { SectionTitle } from "./section-title";
import { FaArrowRight } from "react-icons/fa";
import { FeaturedProjectsProps } from "@/types/data-types";

interface ProjectsFeaturedProps {
  projects: FeaturedProjectsProps[]
}

export function ProjectsFeatured({ projects }: ProjectsFeaturedProps) {
  return (
    <section className="default-px pt-16">
      <SectionTitle subtitle="destaques">Projetos em Destaque</SectionTitle>
      <HorizontalDivider className="mb-16"/>

      <div className="">
        {projects?.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
          />
        ))}
        <HorizontalDivider className="my-10"/>

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link href='/projects' className="flex items-center gap-1 text-sm hover:text-emerald-500 transition-colors">
            Ver Todos
            <FaArrowRight size={12}/>
          </Link>
        </p>
      </div>
    </section>
  );
}

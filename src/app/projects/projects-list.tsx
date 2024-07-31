import Link from "next/link";
import { ProjectCard } from "./project-card";
import { ProjectPageProps } from "@/types/projects-types";

interface ProjectsListProps {
  projects: ProjectPageProps[]
}

export function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <section className="default-px py-32 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      {projects.map((proj, index) => (
        <Link key={index} href={`/projects/${proj.slug}`}>
          <ProjectCard project={proj} />
        </Link>
      ))}
    </section>
  );
}

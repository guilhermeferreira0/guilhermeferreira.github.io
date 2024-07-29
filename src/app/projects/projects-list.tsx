import Link from "next/link";
import { ProjectCard } from "./project-card";

export function ProjectsList() {
  return (
    <section className="default-px py-32 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      <Link href='/projects/bookwise'>
        <ProjectCard />
      </Link>
      <ProjectCard />
      <ProjectCard />
    </section>
  );
}

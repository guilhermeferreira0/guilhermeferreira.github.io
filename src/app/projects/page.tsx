import { SectionTitle } from "@/components/section-title";
import Link from "next/link";
import { ProjectsList } from "./projects-list";
import { getDataProjects } from "@/lib/data";

export default async function Projects() {
  const { projects } = await getDataProjects();
  console.log(projects);

  return (
    <section>
      <section className="w-full h-[630px] bg-hero-image bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center">
        <SectionTitle
          subtitle="projetos"
          className="text-center items-center [&>h3]:text-4xl"
        >
          Meus Projetos
        </SectionTitle>
        <div className="flex flex-col items-center">
          <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum placeat possimus iusto odio repellat optio, provident quidem voluptatem voluptates doloribus nulla rem hic pariatur! Ducimus cum harum consequatur animi itaque!</p>
            <Link href='/'>
              Voltar para home
            </Link>
        </div>
      </section>
      <ProjectsList projects={projects} />
    </section>
  );
}

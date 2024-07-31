import { SectionTitle } from "@/components/section-title";
import Link from "next/link";
import { ProjectsList } from "./projects-list";
import { getDataProjects } from "@/lib/data";
import { Metadata } from "next";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: 'Projetos',
  description: 'My projects page'
}

export default async function Projects() {
  const { projects } = await getDataProjects();

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
            Aqui, você encontrará uma seleção dos meus projetos mais recentes e significativos. Cada projeto detalha as tecnologias que utilizei e suas devidas funcionalidades.
          </p>
          <Link
            className="text-gray-300 text-sm hover:text-emerald-500 transition-colors flex items-center justify-center gap-2 font-saira"
            href='/'
          >
            <HiArrowNarrowLeft />
            Voltar para home
          </Link>
        </div>
      </section>
      <ProjectsList projects={projects} />
    </section>
  );
}

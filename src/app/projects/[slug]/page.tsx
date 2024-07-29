import { Button } from "@/components/button";
import { SectionTitle } from "@/components/section-title";
import { TechBadge } from "@/components/tech-badge";
import Link from "next/link";
import { FiGlobe } from "react-icons/fi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { TbBrandGithub } from "react-icons/tb";
import { Slideshow } from "./slideshow";

export default function ProjectDetails() {
  return (
    <>

      <section className=" default-px w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-[-1]" style={{
          background: 'url(/images/hero-bg.png) no-repeat center/cover, url(https://mobimg.b-cdn.net/v3/fetch/0a/0aa23e8f434059cfe6deed3bc40b35dc.jpeg?h=1400) no-repeat center/cover'
        }}/>

        <SectionTitle
          subtitle="Projetos"
          className="text-center items-center sm:[&>h3]:text-4xl"
        >
          BookWise
        </SectionTitle>
        <p className="text-gray-400 text-center max-w-[640px] mt-4 sm:my-6 text-sm sm:text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ad, repudiandae voluptatem totam fugit aliquid incidunt! Voluptate architecto accusamus, accusantium vel repudiandae eveniet maiores asperiores iusto delectus velit ratione voluptatum?</p>
        <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
          <TechBadge>NextJs</TechBadge>
          <TechBadge>NextJs</TechBadge>
          <TechBadge>NextJs</TechBadge>
        </div>
        <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
          <Link
            target="_blank"
            href='/'
          >
            <Button className="min-w-[180px]">
              <TbBrandGithub size={20}/>
              Repositório
            </Button>
          </Link>
          <Link
            target="_blank"
            href='/'
          >
            <Button className="min-w-[180px]">
              <FiGlobe size={20}/>
              Projeto Online
            </Button>
          </Link>
        </div>

        <Link
          className="text-gray-300 text-sm hover:text-emerald-500 transition-colors flex items-center justify-center gap-2 font-saira"
          href='/projects'
        >
          <HiArrowNarrowLeft />
          Voltar para projetos
        </Link>
      </section>
      <Slideshow />
    </>
  );
}

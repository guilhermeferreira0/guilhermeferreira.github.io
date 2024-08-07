'use client';
import { WorkExperience as TypeWork } from "@/types/category-types";
import { ExperienceItem } from "./experience-item";
import { SectionTitle } from "./section-title";
import { motion } from "framer-motion";

interface WorkExperienceProps {
  work: TypeWork[]
}

export function WorkExperience({ work }: WorkExperienceProps) {
  return (
    <section className="default-px flex py-16 flex-col md:flex-row lg:gap-16 md:gap-4 gap-10">
      <div className="max-w-[420px]">
        <SectionTitle subtitle="experiências">Experiência Profissional</SectionTitle>

        <p className="text-gray-400 mt-6">
          Aqui estão algumas das minhas experiências profissionais. Embora sejam poucas, estou evoluindo cada vez mais e construindo uma base sólida para encarar, desafios e projetos ainda maiores.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {work?.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{opacity: 1, y: 0}}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <ExperienceItem
              experience={exp}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

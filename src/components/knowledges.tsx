'use client';
import { KnownTech } from "./known-tech";
import { SectionTitle } from "./section-title";
import { knownTechProps } from "@/types/category-types";
import { motion } from "framer-motion";

interface KnowledgesProps {
  techs: knownTechProps[]
}

export function Knowledges({ techs }: KnowledgesProps) {

  return (
    <section className="default-px py-16">
      <SectionTitle subtitle="Competências">Conhecimentos</SectionTitle>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-10">
        {techs?.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.1, delay: index * 0.2 }}
          >
            <KnownTech
              iconSvg={tech.iconSvg}
              descriptions={tech.descriptions}
              name={tech.name}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

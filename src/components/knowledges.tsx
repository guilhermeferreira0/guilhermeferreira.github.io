import { KnownTech } from "./known-tech";
import { SectionTitle } from "./section-title";
import { knownTechProps } from "@/types/data-types";

interface KnowledgesProps {
  techs: knownTechProps[]
}

export function Knowledges({ techs }: KnowledgesProps) {

  return (
    <section className="default-px py-16">
      <SectionTitle subtitle="Competências">Conhecimenos</SectionTitle>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-10">
        {techs?.map((tech, index) => (
          <KnownTech
            key={index}
            icon={tech.iconSvg}
            description={tech.descriptions}
            name={tech.name}
          />
        ))}
      </div>
    </section>
  );
}

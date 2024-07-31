import { KnownTech } from "./known-tech";
import { SectionTitle } from "./section-title";
import { knownTechProps } from "@/types/category-types";

interface KnowledgesProps {
  techs: knownTechProps[]
}

export function Knowledges({ techs }: KnowledgesProps) {

  return (
    <section className="default-px py-16">
      <SectionTitle subtitle="Competências">Conhecimentos</SectionTitle>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-10">
        {techs?.map((tech, index) => (
          <KnownTech
            key={index}
            iconSvg={tech.iconSvg}
            descriptions={tech.descriptions}
            name={tech.name}
          />
        ))}
      </div>
    </section>
  );
}

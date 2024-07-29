import { knownTechs } from "@/lib/mock";
import { KnownTech } from "./known-tech";
import { SectionTitle } from "./section-title";

export function Knowledges() {
  return (
    <section className="default-px py-16">
      <SectionTitle subtitle="Competências">Conhecimenos</SectionTitle>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-10">
        {knownTechs.map((tech, index) => (
          <KnownTech
            key={index}
            {...tech}
          />
        ))}
      </div>
    </section>
  );
}

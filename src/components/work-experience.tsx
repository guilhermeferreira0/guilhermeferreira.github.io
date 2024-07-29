import { ExperienceItem } from "./experience-item";
import { SectionTitle } from "./section-title";

export function WorkExperience() {
  return (
    <section className="default-px flex py-16 flex-col md:flex-row lg:gap-16 md:gap-4 gap-10">
      <div className="max-w-[420px]">
        <SectionTitle subtitle="experiências">Experiência Profissional</SectionTitle>

        <p className="text-gray-400 mt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam exercitationem temporibus nobis quas, dolorem vel maxime perferendis iure hic eaque, officia nemo veritatis, illum sint fugit natus laudantium cum! Quae!</p>
      </div>

      <div className="flex flex-col gap-4">
        <ExperienceItem />
      </div>
    </section>
  );
}

import { ProjectSection } from "@/types/category-types";
import Image from "next/image";

interface SlideshowProps {
  sections: ProjectSection[]
}

export function Slideshow({ sections }: SlideshowProps) {

  return (
    <section className="default-px my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {sections.map((section, index) => (
        <div key={index} className="flex flex-col items-center gap-6 md:gap-12">
          <h2 className="text-2xl md:text-3xl text-gray-300">
            {section.title}
          </h2>
          <Image
            src={section.image.url}
            width={1080}
            height={672}
            className="w-full aspect-auto rounded-lg object-cover"
            alt={`Imagem do projeto ${section.title}`}
          />
        </div>
      ))}
    </section>
  );
}

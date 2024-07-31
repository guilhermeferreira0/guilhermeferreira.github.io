import { WorkExperience } from "@/types/category-types";
// import Image from "next/image";
import Link from "next/link";
import { RichText } from "./rich-text";
import { TechBadge } from "./tech-badge";

interface ExperienceProps {
  experience: WorkExperience
}

export function ExperienceItem({ experience }: ExperienceProps) {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 lg:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500">
          <img
            src={experience.companyLogo.url}
            width={40}
            height={40}
            alt="Logo Da empresa"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <Link
            target={experience.companyUrl ? '_blank' : '_self'}
            className="text-gray-500 hover:text-emerald-500 transition-colors"
            href={experience.companyUrl ?? ''}
          >
            {experience.companyName}
          </Link>

          <h4 className="text-gray-300">{experience.role}</h4>
          <span className="text-gray-500">
            {experience.dates}
          </span>
          <div>
            <div className="text-gray-400">
              <RichText content={experience.description.raw}/>
            </div>
          </div>

          <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
          <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
            {experience.technology.map((tech, index) => (
              <TechBadge key={index}>{tech.name}</TechBadge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

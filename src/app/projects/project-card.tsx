import { ProjectPageProps } from "@/types/projects-types";
import Image from "next/image";

interface ProjectCardProps {
  project: ProjectPageProps
}

export function ProjectCard({ project }: ProjectCardProps) {
  const technologies = project.technology.map(name => name.name).join(', ');

  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all">
      <div className="w-full h-48 overflow-hidden group">
        <Image
          src={project.thumbnail.url}
          width={380}
          height={200}
          alt={project.title}
          unoptimized
          className="w-full h-full object-cover group-hover:scale-110 transition-all"
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">{project.title}</strong>
        <p className="mt-2 text-gray-400 line-clamp-4">
          {project.shortDescription}
        </p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">{technologies}</span>
      </div>
    </div>
  );
}

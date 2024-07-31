'use client'
import Image from "next/image";
import { TechBadge } from "./tech-badge";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import { FeaturedProjectsProps } from "@/types/category-types";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: FeaturedProjectsProps
}

export function ProjectCard({ project }: ProjectCardProps) {
  const animProps = {
    initial: {opacity: 0, y: 50},
    whileInView: {opacity: 1, y: 0},
    exit: {opacity: 0, y: 50},
  }

  return (
    <motion.div
      className="flex gap-6 lg:gap-12 flex-col lg:flex-row justify-between"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="lg:w-2/5 w-2/4  m-auto"
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Image
          className="object-cover rounded-lg w-full"
          src={project.thumbnail.url}
          width={420}
          height={304}
          alt={project.title}
        />
      </motion.div>
      <div className="flex-1 lg:py-[18px]">
        <h3 className="font-medium text-lg text-gray-50">
          {project.title}
        </h3>
        <p className="text-gray-400 my-6 text-justify">
          {project.shortDescription}
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          {project.technology.map((tech, index)=> (
            <TechBadge key={index} {...tech}>{tech.name}</TechBadge>
          ))}
        </div>
        <Link
          className="text-gray-300 text-sm hover:text-emerald-500 transition-colors flex items-center justify-center gap-2 font-saira"
          href={`/projects/${project.slug}`}
        >
          Ver Projeto
          <FaLink />
        </Link>
      </div>
    </motion.div>
  );
}

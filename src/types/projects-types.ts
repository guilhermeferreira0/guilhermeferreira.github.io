import { knownTechProps, ProjectSection } from "./category-types";
import { RichTextContent } from "@graphcms/rich-text-types"

export interface ProjectsPageData {
  projects: ProjectPageProps[]
}

export interface ProjectPageProps {
    slug: string
    title: string
    shortDescription: string
    thumbnail: {
      url: string
    }
    technology: knownTechProps[]
}

export interface ProjectDetailProps {
  project: {
    slug: string
    title: string
    shortDescription: string
    thumbnail: {
      url: string
    }
    technology: [{name: string}]
    description: {
      raw: RichTextContent
      text: string
    }
    githubUrl: string
    liveProjectUrl: string
    sections: ProjectSection[]
  }
}

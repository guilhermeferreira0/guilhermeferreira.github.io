import { RichTextProps } from "@graphcms/rich-text-react-renderer";
import { RichTextContent } from "@graphcms/rich-text-types";
import { FeaturedProjectsProps, knownTechProps, SocialsProps, WorkExperience } from "./category-types"


export interface DataPageProps {
  pages: [
    ContentPageProps
  ]
}

export interface ContentPageProps {
  introduction: {
    raw: RichTextContent
  }
  technologies: knownTechProps[]
  profilePicture: string
  socials: SocialsProps[]
  knownTechs: knownTechProps[]
  featuredProjects: FeaturedProjectsProps[]
  workExperience: WorkExperience[]
}

export interface StaticDataProps {
  projects: {
    slug: string
  }[]
}


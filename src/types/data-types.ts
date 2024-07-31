import { RichTextProps } from "@graphcms/rich-text-react-renderer"
import { FeaturedProjectsProps, knownTechProps, SocialsProps, WorkExperience } from "./category-types"


export interface DataPageProps {
  pages: [
    ContentPageProps
  ]
}

export interface ContentPageProps {
  introduction: {
    raw: RichTextProps
  }
  technologies: knownTechProps[]
  profilePicture: string
  socials: SocialsProps[]
  knownTechs: knownTechProps[]
  featuredProjects: FeaturedProjectsProps[]
  workExperience: WorkExperience[]
}




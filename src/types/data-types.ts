import { KnownTechProps } from "@/components/known-tech"
import { RichTextProps } from "@graphcms/rich-text-react-renderer"

export interface knownTechProps {
  iconSvg: string
  name: string
  descriptions: string
}

export interface SocialsProps {
  url: string
  iconSvg: string
}

export interface ProjectSection {
  title: string
  image: {
    url: string
  }
}

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
  profilePicture: string,
  socials: SocialsProps[],
  knownTechs: KnownTechProps[]
  featuredProjects: FeaturedProjectsProps[]
}

export interface FeaturedProjectsProps {
  slug: string
  title: string
  thumbnail: {
    url: string
  }
  shortDescription: string
  technology: KnownTechProps[]
  pageThumbnail: {
    url: string
  }
  sections: ProjectSection[]
  description: {
    raw: RichTextProps
  }
  liveProjectUrl?: string
  githubUrl?:string
}


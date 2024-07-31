import { RichTextContent } from "@graphcms/rich-text-types"

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

export interface FeaturedProjectsProps {
  slug: string
  title: string
  thumbnail: {
    url: string
  }
  shortDescription: string
  technology: knownTechProps[]
  pageThumbnail: {
    url: string
  }
  sections: ProjectSection[]
  description: {
    raw: RichTextContent
  }
  liveProjectUrl?: string
  githubUrl?:string
}

export interface WorkExperience {
  companyLogo: {
    url: string
  }
  companyName: string
  companyUrl: string
  role: string
  description: {
    raw: RichTextContent
  }
  dates: string
  technology: knownTechProps[]
}

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

export interface DataPageProps {
  pages: [
    {
      introduction: {
        raw: RichTextProps
      }
      technologies: knownTechProps[]
      profilePicture: string,
      socials: SocialsProps[],
      knownTechs: KnownTechProps[]
    }
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
}

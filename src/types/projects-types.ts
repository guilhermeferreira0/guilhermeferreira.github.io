import { knownTechProps } from "./category-types"

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

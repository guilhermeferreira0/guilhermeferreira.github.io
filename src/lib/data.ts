'use server';
import { DataPageProps } from "@/types/data-types";
import { ProjectDetailProps, ProjectsPageData } from "@/types/projects-types";

export async function fetchQuery<T>(query: string): Promise<T> {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`
    },
    body: JSON.stringify({query}),
    next: {
      revalidate: 60 * 60 * 24
    }
  })

  const { data } = await response.json();

  return data;
}

export async function getDataHome(): Promise<DataPageProps> {
  const query = `
    query MyQuery {
    pages(where: {slug: "home"}) {
      introduction {
        raw
      }
      technologies {
        iconSvg
        name
        descriptions
      }
      profilePicture {
        url
      }
      knownTechs {
        iconSvg
        name
        descriptions
      }
      socials {
        url
        iconSvg
        name
      }
      featuredProjects {
        slug
        title
        thumbnail {
          url
        }
        shortDescription
        technology {
          name
        }
      }
      workExperience {
        companyName
        companyUrl
        role
        dates
        description {
          raw
        }
        companyLogo {
          url
        }
        technology {
          name
        }
      }
    }
  }`;

  return await fetchQuery(query);
}

export async function getDataProjects(): Promise<ProjectsPageData> {
  const query = `
    query ProjectsQuery {
      projects {
        slug
        title
        shortDescription
        thumbnail {
          url
        }
        technology {
          name
        }
      }
    }
  `
  return await fetchQuery(query);
}

export async function getProjectDetail(slug: string): Promise<ProjectDetailProps> {
  const query = `
    query ProjectDetailQuery {
    project(where: {slug: "${slug}"}) {
      slug
      title
      shortDescription
      thumbnail {
        url
      }
      technology {
        name
      }
      description {
        raw
        text
      }
      githubUrl
      liveProjectUrl
      sections {
        title
        image {
          url
        }
      }
    }
  }`

  return await fetchQuery(query);
}

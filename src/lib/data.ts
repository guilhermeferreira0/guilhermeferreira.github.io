'use server';
import { DataPageProps } from "@/types/data-types";

async function fetchQuery(query: string) {
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

export async function getData(): Promise<DataPageProps> {
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

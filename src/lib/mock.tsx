import { TbBrandGithub, TbBrandLinkedin, TbBrandMysql, TbBrandNextjs, TbBrandReact } from "react-icons/tb";

export const links = [
  {
    id: '0',
    title: 'Home',
    href: '/'
  },
  {
    id: '1',
    title: 'Projetos',
    href: '/projects'
  }
];

export const contacts = [
  {
    id: '0',
    title: 'GitHub',
    href: 'https://github.com/guilhermeferreira0/guilhermeferreira.github.io',
    icon: <TbBrandGithub />
  },
  {
    id: '1',
    title: 'Linkedin',
    href: '',
    icon: <TbBrandLinkedin />
  },
]

export const knownTechs = [
  {
    icon: <TbBrandNextjs />,
    name: 'Next.js',
    description: 'lorem ipsum dolor anet asjo joutin'
  },
  {
    icon: <TbBrandReact />,
    name: 'React.js',
    description: 'lorem ipsum dolor anet asjo joutin'
  },
  {
    icon: <TbBrandMysql />,
    name: 'MySQL',
    description: 'lorem ipsum dolor anet asjo joutin'
  },
]

export const images = [
  {
    title: 'Login',
    image: 'https://mobimg.b-cdn.net/v3/fetch/0a/0aa23e8f434059cfe6deed3bc40b35dc.jpeg?h=1400',
  },
  {
    title: 'Home',
    image: 'https://mobimg.b-cdn.net/v3/fetch/0a/0aa23e8f434059cfe6deed3bc40b35dc.jpeg?h=1400',
  }
]

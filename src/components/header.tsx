import Link from "next/link";
import { NavLink } from "./nav-link";

const links = [
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

export function Header() {
  return (
    <header className="default-px absolute top-0 w-full z-10 h-24 flex items-center justify-center">
      <div className="w-full flex justify-between">
        <Link href='/'>
          FerreiraCodes
        </Link>
        <nav>
          <ul className="flex items-center gap-4 sm:gap-10">
            {links.map(link => (
              <NavLink
                key={link.id}
                id={link.id}
                href={link.href}
                title={link.title} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

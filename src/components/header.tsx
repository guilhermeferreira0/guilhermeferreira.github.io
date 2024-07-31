import Link from "next/link";
import { NavLink } from "./nav-link";

const links = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Projects',
    href: '/projects'
  }
]

export function Header() {
   return (
    <header className="default-px absolute top-0 w-full z-10 h-24 flex items-center justify-center">
      <div className="w-full flex justify-between">
        <Link href='/' className="font-saira tracking-widest text-xl uppercase">
          Ferreira_<strong className="font-medium">Codes</strong>
          <span>_</span>
        </Link>
        <nav>
          <ul className="flex items-center gap-4 sm:gap-10">
            {links.map((link, index) => (
              <NavLink
                key={index}
                href={link.href}
                title={link.title} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

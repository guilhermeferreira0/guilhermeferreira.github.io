'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import { NavLink } from "./nav-link";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

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
  const [isOpen, setIsOpen] = useState(false);

   return (
    <motion.header
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
      className="default-px absolute top-0 w-full z-10 h-24 flex items-center justify-center"
    >
      <div className="w-full flex justify-between">
        <Link href='/' className="font-saira tracking-widest text-lg md:text-xl uppercase">
          Ferreira_<strong className="font-medium">Codes</strong>
          <span>_</span>
        </Link>
        <nav>
          <div
            className="sm:opacity-0 sm:touch-none sm:cursor-default h-24 flex items-center cursor-pointer absolute top-0 right-10 z-30"
            onClick={() => setIsOpen(prev => !prev)}
          >
            {isOpen ? <MdOutlineClose size={20} /> : <CiMenuBurger size={20} /> }
          </div>
          <ul
            className={`flex gap-4 sm:gap-10
            max-sm:flex-col max-sm:fixed max-sm:top-0 max-sm:bg-[#0A3A40] max-sm:min-h-screen max-sm:w-2/4 max-sm:py-20 max-sm:px-5 ${isOpen ? 'max-sm:-right-0' : 'max-sm:-right-2/4'} transition-all`}
              onClick={() => setIsOpen(false)}
          >
            {links.map((link, index) => (
              <NavLink
                key={index}
                href={link.href}
                title={link.title} />
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}

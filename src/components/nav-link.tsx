'use client';
import { ClassMerge } from "@/utils/class-merge";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  title: string,
  href: string
}

export function NavLink(item: NavItemProps) {
  const pathname = usePathname();

  let isActive = false;
  if (pathname === item.href) {
    isActive = true;
  }



  return (
    <li className="text-gray-300 flex items-center gap-2 font-medium font-jetbrains tracking-wider">
      <span className="text-emerald-400">#</span>
      <Link href={item.href} className={ClassMerge(
        isActive && 'text-gray-100'
      )}>{item.title}</Link>
    </li>
  );
}

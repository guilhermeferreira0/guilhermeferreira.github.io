'use client';
import { ClassMerge } from "@/utils/class-merge";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  id: string,
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
    <li key={item.id} className="text-gray-400 flex items-center gap-2 font-medium font-mono">
      <span className="text-emerald-400">#</span>
      <Link href={item.href} className={ClassMerge(
        isActive && 'text-gray-100'
      )}>{item.title}</Link>
    </li>
  );
}

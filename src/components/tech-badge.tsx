import { ReactNode } from "react";

interface TechProps {
  children: ReactNode,
}

export function TechBadge({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <span className="text-white bg-[#0F5959] text-sm py-1 px-3 rounded-lg">
      {children}
    </span>
  );
}

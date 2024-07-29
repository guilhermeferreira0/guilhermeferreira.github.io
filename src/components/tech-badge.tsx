import { ReactNode } from "react";

interface TechProps {
  children: ReactNode,
}

export function TechBadge({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <span className="text-emerald-300 bg-emerald-900/80 text-sm py-1 px-3 rounded-lg">
      {children}
    </span>
  );
}

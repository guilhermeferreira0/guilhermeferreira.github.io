import { ClassMerge } from "@/utils/class-merge";
import { ReactNode } from "react";

interface SectionTitleProps {
  subtitle: string,
  className?: string,
  children: ReactNode
}

export function SectionTitle({
  subtitle,
  className,
  children
}: SectionTitleProps) {
  return (
    <div className={ClassMerge('flex flex-col gap-4', className)}>
      <span className="font-saira text-sm text-emerald-400">{`../${subtitle}`}</span>
      <h3 className="text-3xl font-medium font-jetbrains">{children}</h3>
    </div>
  );
}

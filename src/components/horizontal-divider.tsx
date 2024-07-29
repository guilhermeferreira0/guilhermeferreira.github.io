import { ClassMerge } from "@/utils/class-merge"

interface HorizontalDividerProps {
  className?: string,
}

export function HorizontalDivider({className}: HorizontalDividerProps) {
  return (
    <div className={ClassMerge('w-full my-8 border-b border-b-gray-800', className)}></div>
  );
}

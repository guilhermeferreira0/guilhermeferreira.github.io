import { knownTechProps } from "@/types/category-types";
import { CMSIcon } from "./cms-icon";

export function KnownTech({ iconSvg, name, descriptions }: knownTechProps) {
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col hover:text-emerald-500 hover:bg-gray-600/30 transition-all gap-2">
      <div className="flex items-center justify-between">
        <p className="font-medium">{name}</p>
        <CMSIcon
          icon={iconSvg}
        />
      </div>
      <p>{descriptions}</p>
    </div>
  );
}

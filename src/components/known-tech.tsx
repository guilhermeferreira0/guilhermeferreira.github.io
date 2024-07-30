import { CMSIcon } from "./cms-icon";

export interface KnownTechProps {
    icon: string,
    name: string,
    description: string,
}

export function KnownTech({ icon, name, description }: KnownTechProps) {
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col hover:text-emerald-500 hover:bg-gray-600/30 transition-all gap-2">
      <div className="flex items-center justify-between">
        <p className="font-medium">{name}</p>
        <CMSIcon
          icon={icon}
        />
      </div>
      <p>{description}</p>
    </div>
  );
}

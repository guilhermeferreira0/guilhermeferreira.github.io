import { ClassMerge } from "@/utils/class-merge";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({children, className, ...props}: ButtonProps) {
  return (
    <button
      className={ClassMerge(
        'bg-[#254559] font-saira py-4 px-4 rounded-lg text-gray-50 flex items-center justify-center hover:bg-[#0A3A40] transition-all disabled:opacity-50 gap-2',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

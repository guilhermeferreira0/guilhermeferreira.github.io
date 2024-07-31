'use client'
import { ComponentProps, ReactNode } from "react";
import { motion } from 'framer-motion';

interface TechProps extends ComponentProps<typeof motion.span> {
  children: ReactNode,
}

export function TechBadge({children, ...props}: TechProps) {
  return (
    <motion.span
      className="text-white bg-[#0F5959] text-sm py-1 px-3 rounded-lg"
      {...props}
    >
      {children}
    </motion.span>
  );
}

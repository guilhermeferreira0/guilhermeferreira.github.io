'use client';
import { ClassMerge } from "@/utils/class-merge";
import { ReactNode } from "react";
import { motion } from 'framer-motion';

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
  const animProps = {
    initial: {opacity: 0, x: -100},
    whileInView: {opacity: 1, x: 0},
    exit: {opacity: 0, x: -100}
  }

  return (
    <div className={ClassMerge('flex flex-col gap-4', className)}>
      <motion.span
        {...animProps}
        transition={{duration: 0.5}}
        className="font-saira text-sm text-emerald-400"
      >
        {`../${subtitle}`}
      </motion.span>
      <motion.h3
        {...animProps}
        transition={{duration: 0.5, delay: 0.3}}
        className="text-3xl font-medium font-jetbrains"
      >
        {children}
      </motion.h3>

    </div>
  );
}

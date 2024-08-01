'use client';
import Link from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi";

export default function ErrorPage() {
  return (
    <div className="default-px h-svh flex flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-7">
        <strong className="text-4xl">Error</strong>
        <span className="text-2xl">|</span>
        <p className="text-xl">Ocorreu um erro, tente novamente mais tarde!</p>
      </div>
      <Link
        className="text-gray-300 text-sm hover:text-emerald-500 transition-colors flex items-center justify-center gap-2 font-saira"
        href='/'
      >
        <HiArrowNarrowLeft />
        Voltar para home
      </Link>
    </div>
  );
}

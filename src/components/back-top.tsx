'use client';
import { useCallback, useEffect, useState } from "react";
import { IoArrowUp } from "react-icons/io5";

export function BackTop() {
  const [show, setShow] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) setShow(true);
    if (show && window.scrollY < 500) setShow(false);
  }, [show])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll])

  return (
    <div className="fixed right-4 bottom-4 z-20">
      {show &&
        <button className="shadow-lg shadow-emerald-400/20 bg-slate-700 p-3 rounded-full hover:-translate-x-2 hover:-translate-y-2 transition-all" onClick={scrollToTop}>
          <IoArrowUp />
        </button>
      }
    </div>
  );
}

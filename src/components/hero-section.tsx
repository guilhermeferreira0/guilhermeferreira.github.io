'use client';
import Image from "next/image";
import { TechBadge } from "./tech-badge";
import { Button } from "./button";
import { FaArrowRight } from "react-icons/fa";
import { contacts } from "@/lib/mock";
import Link from "next/link";

export function HeroSection() {
  const handleContact = () => {
    const contactSession = document.querySelector('#contact');
    contactSession?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className="default-px w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end relative">
      <div className="absolute top-0 left-0 -z-10 h-full w-full">
        <video
          muted
          loop
          autoPlay
          className="w-full h-full object-cover">
          <source src="/video/codes-bg.mp4" type="video/mp4"/>
        </video>
      </div>
      <div className="flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-[#107361] font-medium">
            Olá, meu nome é
          </p>
          <h2 className="text-4xl font-medium font-jetbrains mt-2">
            Guilherme Ferreira
          </h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur itaque velit deserunt aperiam autem. Dicta nesciunt aspernatur corrupti quam unde? Illum repellat culpa quis quasi, nam itaque adipisci magni.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({length: 7}).map((_, index) => (
              <TechBadge key={index}>NextJs</TechBadge>
            ))}
          </div>

          <div className="flex-col sm:items-center sm:gap-5 sm:flex-row mt-6 lg:mt-10">
            <Button className="shadow-button" onClick={handleContact}>
              Entre em Contato
              <FaArrowRight size={15}/>
            </Button>

            <div className="text-gray-600 text-2xl flex items-center h-20 gap-3">
              {contacts.map(contact => (
                <Link
                  key={contact.id}
                  href={contact.href}
                  className="hover:text-gray-100 transition-colors"
                >
                  {contact.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Image
          className="rounded-xl max-lg:mt-24 mb-6 shadow-2xl object-cover m-auto"
          src='/images/profile-image.jpg'
          width={300}
          height={300}
          alt="Image for Guilherme Ferreira"
          priority
        />
      </div>
    </section>
  );
}

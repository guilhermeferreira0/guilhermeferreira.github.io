'use client';
import Image from "next/image";
import { TechBadge } from "./tech-badge";
import { Button } from "./button";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { CMSIcon } from "./cms-icon";
import { ContentPageProps } from "@/types/data-types";
import {motion} from 'framer-motion';

interface HeroSectionProps {
  content: ContentPageProps
}

export function HeroSection({ content }: HeroSectionProps) {
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
      <div className="flex items-start justify-between flex-col-reverse lg:flex-row gap-3">
        <motion.div
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100}}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <p className="font-mono text-[#107361] font-medium">
            Olá, meu nome é
          </p>
          <h2 className="text-4xl font-medium font-jetbrains mt-2">
            Guilherme Ferreira
          </h2>
          <div className="text-gray-400 my-6 text-sm sm:text-base text-justify">
            <RichText
              content={content.introduction.raw}
            />
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {content.technologies.map((tech, index) => (
              <TechBadge
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 }}
                key={index}
              >
                {tech.name}</TechBadge>
            ))}
          </div>

          <div className="flex-col sm:items-center sm:gap-5 sm:flex-row mt-6 lg:mt-10">
            <Button className="shadow-button" onClick={handleContact}>
              Entre em Contato
              <FaArrowRight size={15}/>
            </Button>

            <div className="text-gray-600 text-2xl flex items-center h-20 gap-3">
              {content.socials.map((contact, index) => (
                <Link
                  key={index}
                  href={contact.url}
                  className="hover:text-gray-100 transition-colors"
                >
                  <CMSIcon icon={contact.iconSvg}/>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex items-end justify-end m-auto"
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
        >
          <Image
            className="rounded-xl max-lg:mt-24 mb-6 shadow-2xl object-cover"
            src='/images/profile-image.jpg'
            width={300}
            height={300}
            alt="Image for Guilherme Ferreira"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

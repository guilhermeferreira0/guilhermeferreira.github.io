import { images } from "@/lib/mock";
import Image from "next/image";

export function Slideshow() {
  return (
    <section className="default-px my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {images.map((img, index) => (
        <div key={index} className="flex flex-col items-center gap-6 md:gap-12">
          <h2 className="text-2xl md:text-3xl text-gray-300">
            {img.title}
          </h2>
          <Image
            src='/images/profile-image.jpg'
            width={1080}
            height={672}
            className="w-full aspect-auto rounded-lg object-cover"
            alt={`Imagem do projeto ${img.title}`}
          />
        </div>
      ))}
    </section>
  );
}

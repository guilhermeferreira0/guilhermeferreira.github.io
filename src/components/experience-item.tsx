import Image from "next/image";
import Link from "next/link";

export function ExperienceItem() {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 lg:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500">
          <Image
            src={''}
            width={40}
            height={40}
            alt="Logo Da empresa"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <Link
            target="_blank"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
            href='/'
          >
            @ Workwolf
          </Link>

          <h4 className="text-gray-300">Desenvolvedor Front-End</h4>
          <span className="text-gray-500">
            Out 2022 * O momento * (6 meses)
          </span>
          <div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, dolores impedit. Vel, ad ut. Molestias quia voluptatum hic, nihil totam, dignissimos nemo, corrupti eaque beatae ad libero. Eligendi, commodi incidunt.
            </p>
          </div>

          <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
          <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          </div>
        </div>
      </div>
    </div>
  );
}

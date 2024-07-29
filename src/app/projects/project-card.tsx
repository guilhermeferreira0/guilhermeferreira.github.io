import Image from "next/image";

export function ProjectCard() {
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all">
      <div className="w-full h-48 overflow-hidden group">
        <Image
          src='https://www.filhao.com.br/noticia/adicionais/90-62-criando-arte-com-inteligencia-artificial-midjourney-e-outras.png'
          width={380}
          height={200}
          alt="Image"
          unoptimized
          className="w-full h-full object-cover group-hover:scale-110 transition-all"
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">BookWise</strong>
        <p className="mt-2 text-gray-400 line-clamp-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, debitis veritatis odio possimus ducimus reprehenderit minus. Quis odit voluptatem aliquid ratione architecto, aliquam autem at harum inventore aperiam consectetur! Tenetur.</p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">tecnologias</span>
      </div>
    </div>
  );
}

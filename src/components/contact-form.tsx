'use client'

import { IoSend } from "react-icons/io5";
import { Button } from "./button";
import { SectionTitle } from "./section-title";
import { useFormState } from "react-dom";

export function ContactForm() {
  // const {} = useFormState();

  return (
    <section id="contact" className="default-px py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950">
      <div className="w-ful max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contato"
          className="items-center text-center"
        >
          Vamos trabalhar juntos? Entre em contato
        </SectionTitle>

        <form className="mt-12 w-full flex flex-col gap-4">
          <input type="text"
            placeholder="Nome"
            className="w-ful h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          />
          <input type="email"
            placeholder="email@email.com"
            className="w-ful h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          />
          <textarea
            placeholder="Mensagem"
            className="resize-none w-ful bg-gray-800 h-[138px] rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
            maxLength={200}
          />
          <Button className="mt-3 shadow-button">
            Enviar Mensagem
            <IoSend />
          </Button>
        </form>
      </div>
    </section>
  );
}

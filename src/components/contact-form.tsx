'use client'

import { IoSend } from "react-icons/io5";
import { Button } from "./button";
import { SectionTitle } from "./section-title";
import { useFormState } from "react-dom";
import { contactAction } from "@/action/contact";

export function ContactForm() {
  const [ action, dispatch ] = useFormState(contactAction, null);

  return (
    <section id="contact" className="default-px py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950">
      <div className="w-ful max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contato"
          className="items-center text-center"
        >
          Vamos trabalhar juntos? Entre em contato
        </SectionTitle>

        <form className="mt-12 w-full flex flex-col gap-4" action={dispatch}>
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="w-ful h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          />
          <input type="email"
            name="email"
            placeholder="email@email.com"
            className="w-ful h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
          />
          <textarea
            placeholder="Mensagem"
            name="message"
            className="resize-none w-ful bg-gray-800 h-[138px] rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
            maxLength={200}
          />
          <Button
            className="mt-3 shadow-button"
          >
            Enviar Mensagem
            <IoSend />
          </Button>
          {action?.errors && action.errors.map((err, index) => (
            <p key={index}>{err}</p>
          ))}
          {action?.status && (
            <p
              className="font-saira text-sm text-emerald-400"
            >
              {action.status === 200 ? 'Mensagem Enviada' : 'Falha no envio, por favor tente novamente'}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

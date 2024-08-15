'use client';
import { contactAction } from "@/action/contact";
import { useFormState, useFormStatus } from "react-dom";
import { IoSend } from "react-icons/io5";
import { MessageForm } from "./message-form";

function ButtonForm() {
  const { pending } = useFormStatus();
  console.log(pending);

    return (
      <button
        type="submit"
        disabled={pending}
        className="bg-[#254559] font-saira py-4 px-4 rounded-lg text-gray-50 flex items-center justify-center hover:bg-[#0A3A40] transition-all disabled:opacity-50 gap-2"
      >
        {pending ? 'Enviando...' : 'Enviar mensagem'}
        <IoSend />
      </button>
    );
}

export function ContactForm() {
  const [ action, dispatch ] = useFormState(contactAction, null);

  return (
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
      <ButtonForm />
      {action?.errors && action.errors.map((err, index) => (
        <p key={index}>{err}</p>
      ))}
      {action?.status && <MessageForm action={action} />}
    </form>
  );
}

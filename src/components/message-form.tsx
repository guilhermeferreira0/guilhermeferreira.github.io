export function MessageForm(props: any) {

  return (
    <p
      className="font-saira text-sm text-emerald-400"
    >
      {props.action.status === 200 ? 'Mensagem Enviada' : 'Falha no envio, por favor tente novamente'}
    </p>
  );
}

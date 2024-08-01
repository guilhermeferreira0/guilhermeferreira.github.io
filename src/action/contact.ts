const clearInputs = () => {
  const inputs = document.querySelectorAll('input');
  const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
  inputs[0].value = '';
  inputs[1].value = '';
  textarea.value = '';
}

export async function contactAction(_: any, formData: FormData) {
  const email = String(formData.get('email'));
  const name = String(formData.get('name'));
  const message = String(formData.get('message'));
  const errors = [];

  if (!email || !name || !message) errors.push('Dados Inválidos!');
  if (!(message.length > 10)) errors.push('Mensagem precisa ter no minimo 10 caracteres!')
  if (errors.length > 0) return { errors };

  const update = {
    username: name,
    email: email,
    message: message
  }

  const options = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  try {
    const data = await fetch(`/api/send`, options);
    clearInputs();
    return { status: data.status }
  } catch(e) {
  };
}

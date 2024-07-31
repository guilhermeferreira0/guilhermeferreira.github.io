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
    const data = await fetch(`http://localhost:3000/api/send`, options);
    formData.set('email', '');
    formData.set('name', '');
    formData.set('message', '');
    return { status: data.status }
  } catch(e) {
  };
}

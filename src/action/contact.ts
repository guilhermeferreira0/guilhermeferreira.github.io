import axios from 'axios';
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

  try {
    clearInputs();
    const data = await axios.post('/api/send', update);
    return {status: data.status}
  } catch(e) {
  };
}

// import { EmailTemplate } from '@/components/email-template';
// import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email, username, message } = await request.json();

    // const { data, error } = await resend.emails.send({
    //   from: 'Acme <onboarding@resend.dev>',
    //   to: ['delivered@resend.dev'],
    //   subject: 'Thank You',
    //   react: EmailTemplate({ username, message, email }),
    // });

    sgMail.setApiKey(process.env.SENDGRID_API as string);
    const send = await sgMail.send({
      to: 'guilherme.fsilva23@gmail.com',
      from: 'guilherme.fsilva23@gmail.com',
      subject: `Contact SendGrid for ${username}`,
      html: `
        <h4>Email: ${email}</h2>
        <h4>Username: ${username}</h2>
        <h4>Data: ${new Date(Date.now()).toLocaleDateString('pt-BR', { dateStyle: 'long' })}</h4>
        <br/>
        <p>${message}</p>`,
    });

    return NextResponse.json({send});
  } catch (error) {
    console.log(error);
    return NextResponse.json({error}, {status: 500})
  }
};

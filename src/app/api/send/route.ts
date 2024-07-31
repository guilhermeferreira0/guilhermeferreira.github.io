import { EmailTemplate } from '@/components/email-template';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email, username, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Thank You',
      react: EmailTemplate({ username, message, email }),
    });

    return NextResponse.json({data});
  } catch (error) {
    return NextResponse.json({error}, {status: 500})
  }
};

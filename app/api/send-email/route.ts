import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailBody {
  nome?: string;
  email?: string;
  objetivo?: string;
  assunto?: string;
  mensagem?: string;
}

export async function POST(request: NextRequest) {
  try {
    if (request.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Método não permitido' }),
        { status: 405, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = (await request.json()) as SendEmailBody;
    const { nome, email, objetivo, assunto, mensagem } = body;

    if (!nome || !email || !assunto || !mensagem) {
      return new Response(
        JSON.stringify({ error: 'Campos obrigatórios não preenchidos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Email inválido' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const emailHtml = `
      <h2>Novo Contato via Portfólio</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Objetivo:</strong> ${objetivo || 'Não especificado'}</p>
      <p><strong>Assunto:</strong> ${assunto}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${mensagem.replace(/\n/g, '<br>')}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM ?? "",
      to: process.env.CONTACT_EMAIL ?? "",
      replyTo: email,
      subject: `📨 ${assunto} - ${nome}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Erro Resend:', error);
      return new Response(
        JSON.stringify({ error: error.message || 'Erro ao enviar email' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email enviado com sucesso', id: data?.id }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erro ao processar requisição';
    console.error('Erro ao processar requisição:', message);
    return new Response(
      JSON.stringify({ error: 'Erro ao processar sua solicitação' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

import nodemailer from 'nodemailer';

// Configurar transportador Nodemailer (usar variáveis de ambiente)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request) {
  try {
    // Validar método
    if (request.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Método não permitido' }),
        { status: 405, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Parse do body
    const body = await request.json();
    const { nome, email, objetivo, assunto, mensagem } = body;

    // Validação básica
    if (!nome || !email || !assunto || !mensagem) {
      return new Response(
        JSON.stringify({ error: 'Campos obrigatórios não preenchidos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Email inválido' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Preparar corpo do email
    const emailBody = `
      <h2>Novo Contato via Portfólio</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Objetivo:</strong> ${objetivo || 'Não especificado'}</p>
      <p><strong>Assunto:</strong> ${assunto}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${mensagem.replace(/\n/g, '<br>')}</p>
    `;

    // Enviar email
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `📨 ${assunto} - ${nome}`,
      html: emailBody,
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Email enviado com sucesso' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return new Response(
      JSON.stringify({ error: 'Erro ao processar sua solicitação' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

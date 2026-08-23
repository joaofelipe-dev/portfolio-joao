import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contatoSchema } from '@/lib/schemas';

const resend = new Resend(process.env.RESEND_API_KEY);

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_BUCKET_PRUNE_THRESHOLD = 500;

const rateBuckets = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const hits = (rateBuckets.get(key) ?? []).filter((t) => t > windowStart);
  hits.push(now);
  rateBuckets.set(key, hits);

  if (rateBuckets.size > RATE_BUCKET_PRUNE_THRESHOLD) {
    for (const [bucketKey, timestamps] of rateBuckets) {
      if (timestamps.every((t) => t <= windowStart)) {
        rateBuckets.delete(bucketKey);
      }
    }
  }

  return hits.length > RATE_LIMIT_MAX_REQUESTS;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const OBJETIVO_LABELS: Record<string, string> = {
  projeto: 'Desenvolvimento de Projeto',
  consultoria: 'Consultoria Técnica / Code Review',
  parceria: 'Oportunidade de Carreira / Parceria',
  outro: 'Outro',
};

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Muitas tentativas. Aguarde um minuto antes de enviar novamente.' },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'Requisição inválida.' },
      { status: 400 }
    );
  }

  const parsed = contatoSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Dados inválidos. Verifique os campos e tente novamente.' },
      { status: 400 }
    );
  }

  const { nome, email, objetivo, assunto, mensagem } = parsed.data;

  const from = process.env.RESEND_FROM;
  const to = process.env.CONTACT_EMAIL;
  if (!from || !to) {
    console.error(
      'Env de email não configurado: defina RESEND_FROM e CONTACT_EMAIL.'
    );
    return NextResponse.json(
      { error: 'Serviço de email temporariamente indisponível.' },
      { status: 500 }
    );
  }

  const objetivoLabel =
    (objetivo && OBJETIVO_LABELS[objetivo]) || 'Não especificado';

  const emailHtml = `
    <h2>Novo Contato via Portfólio</h2>
    <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Objetivo:</strong> ${escapeHtml(objetivoLabel)}</p>
    <p><strong>Assunto:</strong> ${escapeHtml(assunto)}</p>
    <p><strong>Mensagem:</strong></p>
    <p>${escapeHtml(mensagem).replace(/\n/g, '<br>')}</p>
  `;

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `📨 ${assunto} - ${nome}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Erro Resend:', error);
      return NextResponse.json(
        {
          error:
            'Não foi possível enviar sua mensagem agora. Tente novamente ou use o email direto.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(
      'Erro ao processar requisição:',
      error instanceof Error ? error.message : 'Erro desconhecido'
    );
    return NextResponse.json(
      { error: 'Erro ao processar sua solicitação. Tente novamente.' },
      { status: 500 }
    );
  }
}

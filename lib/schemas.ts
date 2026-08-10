import { z } from "zod";

export const contatoSchema = z.object({
  nome: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z.string().email("Email inválido"),
  objetivo: z.string().min(1, "Objetivo é obrigatório").optional(),
  assunto: z
    .string()
    .min(3, "Assunto deve ter pelo menos 3 caracteres")
    .max(100, "Assunto deve ter no máximo 100 caracteres"),
  mensagem: z
    .string()
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(5000, "Mensagem deve ter no máximo 5000 caracteres"),
});

export type ContatoFormData = z.infer<typeof contatoSchema>;

"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Github,
  Linkedin,
  Mail,
  AlertCircle,
  Send,
  Check,
  CheckCircle2,
  ChevronDown,
  Copy,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contatoSchema, type ContatoFormData } from "@/lib/schemas";

type SubmitStatus = null | "success" | "error";

const EMAIL = "joaoufelipedev@gmail.com";

const fieldClass =
  "w-full h-12 rounded-lg bg-surface-container-lowest border px-4 text-sm md:text-base text-on-surface placeholder:text-on-surface-variant transition-colors duration-150 hover:border-outline-variant/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/25 disabled:opacity-50";

export const Contato = () => {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);
  const [copied, setCopied] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContatoFormData>({
    resolver: zodResolver(contatoSchema),
    mode: "onBlur",
  });

  const copyEmail = () => {
    void navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const onSubmit = async (data: ContatoFormData) => {
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        const errorData = await response.json();
        setSubmitStatus("error");
        console.error("Erro:", errorData);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Erro ao enviar:", error);
    }
  };

  return (
    <section
      id="contato"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden py-12 md:py-16"
    >
      <div className="absolute left-0 top-0 w-72 h-72 bg-secondary/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute right-0 bottom-0 w-72 h-72 bg-primary/5 rounded-full blur-[150px] -z-10" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tertiary mb-4">
              Contato
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-4 tracking-tight">
              Boas ideias merecem bom código.
            </h2>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed max-w-md mb-10">
              Atuo como desenvolvedor e estou sempre aberto a novos projetos,
              colaborações pontuais e boas conversas sobre tecnologia. Conte o
              contexto do que você precisa — respondo com atenção.
            </p>

            <ul className="space-y-1">
              <li className="flex items-center gap-4 rounded-lg p-2 -m-2">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-surface-container-high text-on-surface-variant border border-accent">
                  <Mail size={18} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-on-surface-variant">
                    Email
                  </p>
                  <Link
                    href={`mailto:${EMAIL}`}
                    className="block truncate text-sm md:text-base text-on-surface hover:text-primary transition-colors"
                  >
                    {EMAIL}
                  </Link>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copiar endereço de email"
                  className="flex size-11 shrink-0 items-center justify-center rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
                >
                  {copied ? (
                    <Check size={16} className="text-accent-green" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
                <span role="status" className="sr-only">
                  {copied ? "Email copiado" : ""}
                </span>
              </li>

              <li>
                <Link
                  href="https://github.com/joaofelipe-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-lg p-2 -m-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-surface-container-high text-on-surface-variant group-hover:text-on-surface transition-colors border border-accent">
                    <Github size={18} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-on-surface-variant">
                      GitHub
                    </p>
                    <p className="truncate text-sm md:text-base text-on-surface group-hover:text-primary transition-colors">
                      github.com/joaofelipe-dev
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-on-surface-variant opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 focus-visible:opacity-100 transition-all duration-200"
                  />
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.linkedin.com/in/joao-felipedev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-lg p-2 -m-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-surface-container-high text-on-surface-variant group-hover:text-on-surface transition-colors border border-accent">
                    <Linkedin size={18} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-on-surface-variant">
                      LinkedIn
                    </p>
                    <p className="truncate text-sm md:text-base text-on-surface group-hover:text-primary transition-colors">
                      linkedin.com/in/joao-felipedev
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-on-surface-variant opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 focus-visible:opacity-100 transition-all duration-200"
                  />
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="w-full rounded-xl bg-surface-container-low p-6 md:p-8">
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  className="mb-6 flex items-start gap-3 p-4 bg-secondary/10 border border-secondary/30 rounded-lg text-accent-violet text-sm font-medium leading-snug"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                  Mensagem enviada com sucesso! Entrarei em contato em breve.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                  className="mb-6 flex items-start gap-3 p-4 bg-destructive/15 border border-destructive/40 rounded-lg text-destructive text-sm font-medium leading-snug"
                >
                  <AlertCircle size={18} className="mt-0.5 shrink-0" />
                  Erro ao enviar mensagem. Tente novamente ou me chame direto
                  pelo email ao lado.
                </motion.div>
              )}

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="nome"
                      className="text-xs font-medium uppercase tracking-[0.05em] text-on-surface-variant"
                    >
                      Nome{" "}
                      <span aria-hidden="true" className="text-primary">
                        *
                      </span>
                    </Label>
                    <Input
                      id="nome"
                      placeholder="Seu nome"
                      autoComplete="name"
                      className={fieldClass}
                      disabled={isSubmitting}
                      {...register("nome")}
                      aria-invalid={errors.nome ? "true" : "false"}
                      aria-describedby={errors.nome ? "nome-error" : undefined}
                    />
                    {errors.nome && (
                      <p
                        id="nome-error"
                        className="text-destructive text-xs flex items-center gap-1"
                      >
                        <AlertCircle size={14} /> {errors.nome.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="text-xs font-medium uppercase tracking-[0.05em] text-on-surface-variant"
                    >
                      Email{" "}
                      <span aria-hidden="true" className="text-primary">
                        *
                      </span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="voce@empresa.com"
                      autoComplete="email"
                      spellCheck={false}
                      className={fieldClass}
                      disabled={isSubmitting}
                      {...register("email")}
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="text-destructive text-xs flex items-center gap-1"
                      >
                        <AlertCircle size={14} /> {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="objetivo"
                      className="text-xs font-medium uppercase tracking-[0.05em] text-on-surface-variant"
                    >
                      Objetivo{" "}
                      <span aria-hidden="true" className="text-primary">
                        *
                      </span>
                    </Label>
                    <div className="relative">
                      <select
                        id="objetivo"
                        autoComplete="off"
                        {...register("objetivo")}
                        className={`${fieldClass} appearance-none pr-10 cursor-pointer`}
                        disabled={isSubmitting}
                        aria-invalid={errors.objetivo ? "true" : "false"}
                        aria-describedby={
                          errors.objetivo ? "objetivo-error" : undefined
                        }
                      >
                        <option value="">Selecione uma opção</option>
                        <option value="projeto">
                          Desenvolvimento de Projeto
                        </option>
                        <option value="consultoria">
                          Consultoria Técnica / Code Review
                        </option>
                        <option value="parceria">
                          Oportunidade de Carreira / Parceria
                        </option>
                        <option value="outro">Outro</option>
                      </select>
                      <ChevronDown
                        size={16}
                        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
                      />
                    </div>
                    {errors.objetivo && (
                      <p
                        id="objetivo-error"
                        className="text-destructive text-xs flex items-center gap-1"
                      >
                        <AlertCircle size={14} /> {errors.objetivo.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="assunto"
                      className="text-xs font-medium uppercase tracking-[0.05em] text-on-surface-variant"
                    >
                      Assunto{" "}
                      <span aria-hidden="true" className="text-primary">
                        *
                      </span>
                    </Label>
                    <Input
                      id="assunto"
                      placeholder="Resumo do assunto"
                      autoComplete="off"
                      className={fieldClass}
                      disabled={isSubmitting}
                      {...register("assunto")}
                      aria-invalid={errors.assunto ? "true" : "false"}
                      aria-describedby={
                        errors.assunto ? "assunto-error" : undefined
                      }
                    />
                    {errors.assunto && (
                      <p
                        id="assunto-error"
                        className="text-destructive text-xs flex items-center gap-1"
                      >
                        <AlertCircle size={14} /> {errors.assunto.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="mensagem"
                    className="text-xs font-medium uppercase tracking-[0.05em] text-on-surface-variant"
                  >
                    Mensagem{" "}
                    <span aria-hidden="true" className="text-primary">
                      *
                    </span>
                  </Label>
                  <Textarea
                    id="mensagem"
                    placeholder="Descreva sua ideia ou necessidade"
                    autoComplete="off"
                    className={`${fieldClass} !h-auto min-h-32 md:min-h-36 resize-none py-3`}
                    disabled={isSubmitting}
                    {...register("mensagem")}
                    aria-invalid={errors.mensagem ? "true" : "false"}
                    aria-describedby={
                      errors.mensagem ? "mensagem-error" : undefined
                    }
                  />
                  {errors.mensagem && (
                    <p
                      id="mensagem-error"
                      className="text-destructive text-xs flex items-center gap-1"
                    >
                      <AlertCircle size={14} /> {errors.mensagem.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full rounded-xl text-base font-semibold transition-all duration-200 active:scale-[0.99] disabled:pointer-events-none disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Enviar mensagem</span>
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

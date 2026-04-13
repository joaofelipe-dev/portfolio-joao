"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, AlertCircle, Send } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contatoSchema } from "@/lib/schemas";

export const Contato = () => {
  const [submitStatus, setSubmitStatus] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contatoSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
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
      {/* Background Blobs */}
      <div className="absolute left-0 top-0 w-72 h-72 bg-secondary/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute right-0 bottom-0 w-72 h-72 bg-primary/5 rounded-full blur-[150px] -z-10" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14 w-full"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface text-center mb-3 font-[var(--font-space-grotesk)] tracking-tight">
            Vamos Trabalhar Juntos
          </h2>
        </motion.div>

        <div className="w-full flex flex-col md:w-[550px] gap-8 items-center justify-center">
          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full rounded-2xl p-6 md:p-10 glass surface-elevated"
          >
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
                className="mb-6 p-4 md:p-5 bg-secondary/15 border border-secondary/50 rounded-xl text-secondary text-center text-sm md:text-base font-medium"
              >
                ✓ Mensagem enviada com sucesso! Entrarei em contato em breve.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
                className="mb-6 p-4 md:p-5 bg-destructive/15 border border-destructive/50 rounded-xl text-destructive text-center text-sm md:text-base font-medium flex items-center gap-2"
              >
                <AlertCircle size={18} />
                Erro ao enviar mensagem. Tente novamente ou entre em contato direto por email.
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 md:space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-on-surface font-semibold text-sm md:text-base">
                  Nome Completo *
                </Label>
                <Input
                  id="nome"
                  placeholder="Ex: João da Silva"
                  className="bg-surface-container-low border border-outline-variant/30 text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all rounded-xl h-12"
                  disabled={isSubmitting}
                  {...register("nome")}
                  aria-invalid={errors.nome ? "true" : "false"}
                  aria-describedby={errors.nome ? "nome-error" : undefined}
                />
                {errors.nome && (
                  <p id="nome-error" className="text-destructive text-xs md:text-sm flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.nome.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-on-surface font-semibold text-sm md:text-base">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="bg-surface-container-low border border-outline-variant/30 text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all rounded-xl h-12"
                  disabled={isSubmitting}
                  {...register("email")}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-destructive text-xs md:text-sm flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.email.message}
                  </p>
                )}
              </div>

              {/* Objective Field */}
              <div className="space-y-2">
                <Label htmlFor="objetivo" className="text-on-surface font-semibold text-sm md:text-base">
                  Objetivo do Contato
                </Label>
                <select
                  id="objetivo"
                  {...register("objetivo")}
                  className="w-full bg-surface-container-low border border-outline-variant/30 text-on-surface focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all rounded-xl h-12 px-3"
                  disabled={isSubmitting}
                  aria-invalid={errors.objetivo ? "true" : "false"}
                  aria-describedby={errors.objetivo ? "objetivo-error" : undefined}
                >
                  <option value="">Selecione uma opção</option>
                  <option value="projeto">Desenvolvimento de Projeto</option>
                  <option value="consultoria">Consultoria Técnica / Code Review</option>
                  <option value="parceria">Oportunidade de Carreira / Parceria</option>
                  <option value="outro">Outro</option>
                </select>
                {errors.objetivo && (
                  <p id="objetivo-error" className="text-destructive text-xs md:text-sm flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.objetivo.message}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <Label htmlFor="assunto" className="text-on-surface font-semibold text-sm md:text-base">
                  Assunto *
                </Label>
                <Input
                  id="assunto"
                  placeholder="Resumo do assunto"
                  className="bg-surface-container-low border border-outline-variant/30 text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all rounded-xl h-12"
                  disabled={isSubmitting}
                  {...register("assunto")}
                  aria-invalid={errors.assunto ? "true" : "false"}
                  aria-describedby={errors.assunto ? "assunto-error" : undefined}
                />
                {errors.assunto && (
                  <p id="assunto-error" className="text-destructive text-xs md:text-sm flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.assunto.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <Label htmlFor="mensagem" className="text-on-surface font-semibold text-sm md:text-base">
                  Sua Mensagem *
                </Label>
                <Textarea
                  id="mensagem"
                  placeholder="Descreva sua ideia ou necessidade..."
                  className="min-h-36 md:min-h-40 bg-surface-container-low border border-outline-variant/30 text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all rounded-xl resize-none p-3 md:p-4"
                  disabled={isSubmitting}
                  {...register("mensagem")}
                  aria-invalid={errors.mensagem ? "true" : "false"}
                  aria-describedby={errors.mensagem ? "mensagem-error" : undefined}
                />
                {errors.mensagem && (
                  <p id="mensagem-error" className="text-destructive text-xs md:text-sm flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.mensagem.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full font-semibold py-3 md:py-4 text-base md:text-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full flex flex-col items-center gap-6"
          >
            <div className="text-center text-sm text-on-surface-variant">
              Ou entre em contato através de:
            </div>
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <motion.div
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <Link
                  href="mailto:joaoufelipe@hotmail.com"
                  title="Enviar email"
                  aria-label="Enviar email para João Felipe"
                  className="flex"
                >
                  <Card className="flex items-center justify-center text-on-surface bg-surface-container-high hover:bg-surface-container-highest p-4 w-14 h-14 md:w-16 md:h-16 aspect-square rounded-full transition-all duration-200 hover:scale-110 cursor-pointer">
                    <Mail size={24} />
                  </Card>
                </Link>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-surface-bright text-on-surface px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Email
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <Link
                  href="https://github.com/joaofelipe-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Ver GitHub"
                  aria-label="Ver perfil do GitHub de João Felipe"
                  className="flex"
                >
                  <Card className="flex items-center justify-center text-on-surface bg-surface-container-high hover:bg-surface-container-highest p-4 w-14 h-14 md:w-16 md:h-16 aspect-square rounded-full transition-all duration-200 hover:scale-110 cursor-pointer">
                    <Github size={24} />
                  </Card>
                </Link>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-surface-bright text-on-surface px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  GitHub
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <Link
                  href="https://www.linkedin.com/in/joao-felipedev"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Ver LinkedIn"
                  aria-label="Ver perfil do LinkedIn de João Felipe"
                  className="flex"
                >
                  <Card className="flex items-center justify-center text-on-surface bg-surface-container-high hover:bg-surface-container-highest p-4 w-14 h-14 md:w-16 md:h-16 aspect-square rounded-full transition-all duration-200 hover:scale-110 cursor-pointer">
                    <Linkedin size={24} />
                  </Card>
                </Link>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-surface-bright text-on-surface px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  LinkedIn
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
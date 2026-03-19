"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "motion/react";

export const Contato = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(event.target);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/e44555f41de2646eddab7a7928ce763f",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            nome: formData.get("nome"),
            email: formData.get("email"),
            objetivo: formData.get("objetivo"),
            assunto: formData.get("assunto"),
            mensagem: formData.get("mensagem"),
            _subject: "📨 Novo contato pelo seu portfólio!",
            _captcha: "false",
            _template: "box",
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        event.target.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contato"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden py-12 md:py-16"
    >
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-8 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16 w-full"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-center mb-4">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Vamos conversar sobre seu projeto, oportunidade ou ideia. Estou sempre disponível para novas desafios.
          </p>
        </motion.div>

        <div className="w-full flex flex-col md:w-[550px] gap-8 items-center justify-center">
          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full backdrop-blur-md rounded-2xl p-6 md:p-10 border border-foreground/20 bg-foreground/5 shadow-xl hover:border-foreground/40 hover:bg-foreground/10 transition-all duration-300"
          >
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
                className="mb-6 p-4 md:p-5 bg-green-500/15 border border-green-500/50 rounded-lg text-green-400 text-center text-sm md:text-base font-medium"
              >
                ✓ Mensagem enviada com sucesso! Entrarei em contato em breve.
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
                className="mb-6 p-4 md:p-5 bg-red-500/15 border border-red-500/50 rounded-lg text-red-400 text-center text-sm md:text-base font-medium"
              >
                ✗ Erro ao enviar mensagem. Tente novamente ou entre em contato direto por email.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-foreground font-semibold text-sm md:text-base">
                  Nome Completo
                </Label>
                <Input
                  id="nome"
                  name="nome"
                  required
                  placeholder="Ex: João da Silva"
                  className="bg-foreground/10 border border-foreground/30 text-foreground placeholder:text-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all rounded-lg h-12"
                  disabled={isSubmitting}
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-semibold text-sm md:text-base">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className="bg-foreground/10 border border-foreground/30 text-foreground placeholder:text-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all rounded-lg h-12"
                  disabled={isSubmitting}
                />
              </div>

              {/* Objective Field */}
              <div className="space-y-2">
                <Label htmlFor="objetivo" className="text-foreground font-semibold text-sm md:text-base">
                  Objetivo do Contato
                </Label>
                <Select name="objetivo" disabled={isSubmitting} defaultValue="">
                  <SelectTrigger id="objetivo" className="w-full bg-foreground/10 border border-foreground/30 text-foreground focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all rounded-lg h-12">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-foreground/30">
                    <SelectItem value="projeto">Desenvolvimento de Projeto</SelectItem>
                    <SelectItem value="consultoria">
                      Consultoria Técnica / Code Review
                    </SelectItem>
                    <SelectItem value="parceria">
                      Oportunidade de Carreira / Parceria
                    </SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <Label htmlFor="assunto" className="text-foreground font-semibold text-sm md:text-base">
                  Assunto
                </Label>
                <Input
                  id="assunto"
                  name="assunto"
                  required
                  placeholder="Resumo do assunto"
                  className="bg-foreground/10 border border-foreground/30 text-foreground placeholder:text-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all rounded-lg h-12"
                  disabled={isSubmitting}
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <Label htmlFor="mensagem" className="text-foreground font-semibold text-sm md:text-base">
                  Sua Mensagem
                </Label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  placeholder="Descreva sua ideia ou necessidade..."
                  className="min-h-36 md:min-h-40 bg-foreground/10 border border-foreground/30 text-foreground placeholder:text-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all rounded-lg resize-none p-3 md:p-4"
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit Button */}
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 md:py-4 text-base md:text-lg rounded-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <span>Enviar Mensagem</span>
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
            <div className="text-center text-sm text-muted-foreground">
              Ou entre em contato através de:
            </div>
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link href="mailto:joaoufelipe@hotmail.com" aria-label="Enviar email para João Felipe">
                  <Card className="flex items-center justify-center text-foreground bg-primary/15 hover:bg-primary/25 p-4 w-14 h-14 md:w-16 md:h-16 aspect-square rounded-full backdrop-blur-sm border border-primary/30 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20">
                    <Mail size={24} />
                  </Card>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link href="https://github.com/joaofelipe-dev" target="_blank" aria-label="Ver perfil do GitHub de João Felipe">
                  <Card className="flex items-center justify-center text-foreground bg-primary/15 hover:bg-primary/25 p-4 w-14 h-14 md:w-16 md:h-16 aspect-square rounded-full backdrop-blur-sm border border-primary/30 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20">
                    <Github size={24} />
                  </Card>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="https://www.linkedin.com/in/joao-felipedev"
                  target="_blank"
                  aria-label="Ver perfil do LinkedIn de João Felipe"
                >
                  <Card className="flex items-center justify-center text-foreground bg-primary/15 hover:bg-primary/25 p-4 w-14 h-14 md:w-16 md:h-16 aspect-square rounded-full backdrop-blur-sm border border-primary/30 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20">
                    <Linkedin size={24} />
                  </Card>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Waves */}
      <div className="absolute bottom-0 w-full h-32 overflow-hidden z-0 pointer-events-none -scale-y-100">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 213"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,192L80,170.7C160,149,320,107,480,112C640,117,800,171,960,192C1120,213,1280,203,1360,197.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            fill="url(#waveGrad1)"
            className="shadow-lg shadow-blue-500/30"
          />
        </svg>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 213"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,160L60,149.3C120,139,240,117,360,96C480,75,600,53,720,74.7C840,96,960,160,1080,160C1200,160,1320,96,1380,64L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            fill="url(#waveGrad2)"
            className="blur-sm shadow-2xl shadow-purple-500"
          />
        </svg>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 213"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,128L40,133.3C80,139,160,149,240,165.3C320,181,400,203,480,197.3C560,192,640,160,720,149.3C800,139,880,149,960,160C1040,171,1120,181,1200,181.3C1280,181,1360,171,1400,165.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            fill="url(#waveGrad3)"
            className="opacity-70 blur-[2px] shadow-lg shadow-indigo-400"
          />
        </svg>
      </div>
    </section>
  );
};

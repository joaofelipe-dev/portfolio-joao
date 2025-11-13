"use client";
import { Button } from "@/components/ui/button";
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
import React from "react";

export const Contato = () => {
  return (
    <section
      id="contato"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Conteúdo principal */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-8 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-2">
          Contato
        </h1>

        <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-5 items-center justify-center ">
          {/* Formulário */}
          <div className="w-full bg-foreground/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-foreground/20">
            <form className="space-y-4 md:space-y-6 ">
              <div className="space-y-2">
                <Label className="text-foreground font-medium">Nome</Label>
                <Input 
                  placeholder="Ex: João da Silva" 
                  className="bg-foreground/20 border-foreground/30 text-foreground placeholder:text-foreground/60"
                />
              </div>
              
              <div className="space-y-2">
                <Label className="text-foreground font-medium">Email</Label>
                <Input 
                  placeholder="Ex: joaodasilva@email.com" 
                  className="bg-foreground/20 border-foreground/30 text-foreground placeholder:text-foreground/60"
                />
              </div>
              
              <div className="space-y-2">
                <Label className="text-foreground font-medium">Objetivo do contato</Label>
                <Select>
                  <SelectTrigger className="w-full bg-foreground/20 border-foreground/30 text-foreground">
                    <SelectValue placeholder="Objetivo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="contrato">Quero te contratar</SelectItem>
                    <SelectItem value="sobre">Quero saber mais sobre</SelectItem>
                    <SelectItem value="contato">Somente um contato breve</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label className="text-foreground font-medium">Assunto</Label>
                <Input 
                  placeholder="Assunto" 
                  className="bg-foreground/20 border-foreground/30 text-foreground placeholder:text-foreground/60"
                />
              </div>
              
              <div className="space-y-2">
                <Label className="text-foreground font-medium">Descrição</Label>
                <Textarea 
                  placeholder="Mensagem" 
                  className="min-h-32 bg-foreground/20 border-foreground/30 text-foreground placeholder:text-foreground/60 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-foreground/20 hover:bg-foreground/30 text-foreground border border-foreground/30 transition-all duration-300"
              >
                Enviar
              </Button>
            </form>
          </div>

          {/* Ícones de contato */}
          <div className="w-full flex md:flex-col items-start justify-center gap-6 md:gap-8">
            <div className="flex items-center justify-center text-foreground bg-foreground/20 hover:bg-foreground/30 p-4 min-h-16 w-16 aspect-square rounded-full backdrop-blur-sm border border-foreground/30 cursor-pointer transition-all duration-300">
              <Mail size={28} />
            </div>
            <div className="flex items-center justify-center text-foreground bg-foreground/20 hover:bg-foreground/30 p-4 min-h-16 w-16 aspect-square rounded-full backdrop-blur-sm border border-foreground/30 cursor-pointer transition-all duration-300">
              <Github size={28}/>
            </div>
            <div className="flex items-center justify-center text-foreground bg-foreground/20 hover:bg-foreground/30 p-4 min-h-16 w-16 aspect-square rounded-full backdrop-blur-sm border border-foreground/30 cursor-pointer transition-all duration-300">
              <Linkedin size={28}/>
            </div>
          </div>
        </div>
      </div>

      {/* Waves do rodapé (invertidas) */}
      <div className="absolute bottom-0 w-full h-32 overflow-hidden z-0 pointer-events-none -scale-y-100">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 213"
          preserveAspectRatio="none"
        >
          <path
            d="M0,192L80,170.7C160,149,320,107,480,112C640,117,800,171,960,192C1120,213,1280,203,1360,197.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            fill="url(#grad1)"
            className="shadow-lg shadow-blue-500/30"
          />
        </svg>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 213"
          preserveAspectRatio="none"
        >
          <path
            d="M0,160L60,149.3C120,139,240,117,360,96C480,75,600,53,720,74.7C840,96,960,160,1080,160C1200,160,1320,96,1380,64L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            fill="url(#grad2)"
            className="blur-sm shadow-2xl shadow-purple-500"
          />
        </svg>
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 213"
          preserveAspectRatio="none"
        >
          <path
            d="M0,128L40,133.3C80,139,160,149,240,165.3C320,181,400,203,480,197.3C560,192,640,160,720,149.3C800,139,880,149,960,160C1040,171,1120,181,1200,181.3C1280,181,1360,171,1400,165.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            fill="url(#grad3)"
            className="opacity-70 blur-[2px] shadow-lg shadow-indigo-400"
          />
        </svg>
      </div>
    </section>
  );
};
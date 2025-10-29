"use client";
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
import React from "react";

export const Contato = () => {
  return (
    <section
      id="contato"
      className="items-center text-center max-h-screen w-full"
    >
      <h1>Contato</h1>
      <div className="mt-10 flex flex-col p-6 rounded-lg bg-cover bg-center bg-no-repeat text-white">
        <form className="flex-col space-y-4 md:p-40">
          <div className="space-y-1">
            <Label>Nome</Label>
            <Input placeholder="Ex: João da Silva"></Input>
          </div>
          <div className="space-y-1">
            <Label>Email</Label>
            <Input placeholder="Ex: joaodasilva@email.com"></Input>
          </div>
          <div className="space-y-1">
            <Label>Objetivo do contato</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Objetivo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Quero te contratar</SelectItem>
                <SelectItem value="dark">Quero saber mais sobre</SelectItem>
                <SelectItem value="system">Somente um contato breve</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1">
            <Label>Assunto</Label>
            <Input placeholder="Assunto"></Input>
          </div>
          <div className="space-y-1">
            <Label>Descrição</Label>
            <Textarea placeholder="Mensagem" className="min-h-30" />
          </div>
        </form>
      </div>
      {/* Waves do rodapé */}
      <div className="relative bottom-20 w-full h-[213px] overflow-hidden -scale-y-100 z-0 pointer-events-none">
        {/* Wave 1 */}
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

        {/* Wave 2 */}
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

        {/* Wave 3 */}
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

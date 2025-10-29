"use client";
import Link from "next/link";
import React from "react";

export const Projetos = ({ image, title, description, href }) => {
  return (
    <div className="relative flex flex-col items-center justify-end shadow-md shadow-foreground rounded-2xl aspect-video h-60 w-full md:h-80 md:min-w-80 overflow-hidden hover:scale-105 hover:shadow-lg transition cursor-pointer">
      <div
        className="absolute inset-0 bg-center bg-cover blur-xs  scale-110"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <Link href={href} target="_blank">
        {/* Camada escura para contraste */}
        <div className="absolute inset-0 bg-black/40"></div>
      </Link>

      {/* Conteúdo sobre o fundo */}
      <div className="relative z-10 flex flex-col items-center text-center p-4 w-full h-20 bg-foreground/10">
        <p className="text-lg font-semibold text-white mb-2">{title}</p>
        <span className="text-sm text-gray-200">{description}</span>
      </div>
    </div>
  );
};

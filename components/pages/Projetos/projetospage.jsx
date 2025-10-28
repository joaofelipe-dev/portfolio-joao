import React from "react";
import { Projetos } from "./projetos";

export const ProjetosPage = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="flex flex-col justify-center items-center p-4 md:p-6 lg:p-8 h-screen">
        <h1>Meus Projetos</h1>
        <h2 className="mt-5 mb-5">Veja alguns dos meus projetos criados</h2>
        <div className="flex flex-row space-x-5 md:space-x-10 lg:space-x-20 mt-20">
          <Projetos
            image="/wallpaper-dark.png"
            title="Parallax Creator"
            description="Criador de efeito Parallax"
          ></Projetos>
          <Projetos
            image="/wallpaper-dark.png"
            title="Parallax Creator"
            description="Criador de efeito Parallax"
          ></Projetos>
          <Projetos
            image="/wallpaper-dark.png"
            title="Parallax Creator"
            description="Criador de efeito Parallax"
          ></Projetos>
        </div>
      </div>
    </section>
  );
};

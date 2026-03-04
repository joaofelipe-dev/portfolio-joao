import { Banner } from "@/app/pages/Banner";
import { Contato } from "@/app/pages/Contato/contato";
import { ProjetosPage } from "@/app/pages/Projetos";
import { Skills } from "@/app/pages/Skills/skills";
import { Sobre } from "@/app/pages/Sobre";
import { BackgroundImage } from "@/components/BackgroundImage";
import { Stack } from "@/components/Stack";
export default function Home() {
  return (
    <>
      <BackgroundImage src="/wallpaper-dark.png" alt="Imagem de fundo" />
      <div className="px-10">
        <Banner />
        <Stack/>
        <ProjetosPage />
        <Skills />
        <Sobre />
        <Contato />
      </div>
    </>
  );
}

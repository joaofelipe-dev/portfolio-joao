import { Banner } from "@/components/pages/Banner/";
import { Contato } from "@/components/pages/Contato/contato";
import { ProjetosPage } from "@/components/pages/Projetos/";
import { Skills } from "@/components/pages/Skills/skills";
import { Sobre } from "@/components/pages/Sobre/";
export default function Home() {
  return (
    <>
      <Banner />
      <ProjetosPage />
      <Skills/>
      <Sobre />
      <Contato />
    </>
  );
}

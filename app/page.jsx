import { Banner } from "@/components/pages/Banner/";
import { Conhecimentos } from "@/components/pages/Conhecimentos";
import { Contato } from "@/components/pages/Contato/contato";
import { ProjetosPage } from "@/components/pages/Projetos/";
import { Sobre } from "@/components/pages/Sobre/";
export default function Home() {
  return (
    <>
      <Banner />
      <ProjetosPage />
      <Conhecimentos/>
      <Sobre />
      <Contato />
    </>
  );
}

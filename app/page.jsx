import { Banner } from "@/components/pages/Banner/";
import { Contato } from "@/components/pages/Contato/contato";
import { ProjetosPage } from "@/components/pages/Projetos/";
import { Sobre } from "@/components/pages/Sobre/";
export default function Home() {
  return (
    <>
      <Banner />
      <ProjetosPage />
      <Sobre />
      <Contato />
    </>
  );
}

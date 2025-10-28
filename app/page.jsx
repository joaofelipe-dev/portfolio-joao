import { Menu } from "@/components/Menu";
import { Banner } from "@/components/pages/Banner/";
import { ProjetosPage } from "@/components/pages/Projetos/";
import Sobre from "@/components/pages/Sobre/sobre";
export default function Home() {
  return (
    <>
      <Banner />
      <ProjetosPage />
      <Sobre />
    </>
  );
}

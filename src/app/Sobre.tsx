import PaginaTexto from "@/components/PaginaTexto";
import { links } from "@/components/Rodape";
import { textos } from "@/constants/textos";

export default function Sobre() {
  return (
    <PaginaTexto
      titulo="Objetivo da empresa"
      paragrafos={[textos.objetivo]}
      rodape={[links.solucoes, links.detalhes]}
    />
  );
}

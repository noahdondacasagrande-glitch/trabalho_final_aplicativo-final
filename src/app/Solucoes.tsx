import PaginaTexto from "@/components/PaginaTexto";
import { links } from "@/components/Rodape";
import { textos } from "@/constants/textos";

export default function Solucoes() {
  return (
    <PaginaTexto
      titulo="Problemas e resoluções encontrados"
      paragrafos={[textos.problema, textos.solucao]}
      rodape={[links.sobre, links.detalhes]}
    />
  );
}

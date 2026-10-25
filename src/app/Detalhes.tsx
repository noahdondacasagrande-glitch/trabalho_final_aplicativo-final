import PaginaTexto from "@/components/PaginaTexto";
import { links } from "@/components/Rodape";
import { textos } from "@/constants/textos";

export default function Detalhes() {
  return (
    <PaginaTexto
      titulo="Público alvo"
      paragrafos={[textos.publico, textos.perguntaPublico, textos.explicacaoPublico]}
      rodape={[links.solucoes, links.sobre]}
    />
  );
}

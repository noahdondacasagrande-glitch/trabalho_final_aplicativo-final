import { Href } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import Header from "@/components/Header";
import Rodape from "@/components/Rodape";
import { cores } from "@/constants/tema";

type Props = {
  titulo: string;
  paragrafos: string[];
  rodape: { texto: string; href: Href }[];
};

// Estrutura das páginas Sobre, Soluções e Detalhes (fundo azul, texto branco e rodapé)
export default function PaginaTexto({ titulo, paragrafos, rodape }: Props) {
  return (
    <View style={styles.pagina}>
      <Header />
      <ScrollView contentContainerStyle={styles.conteudo}>
        <Text style={styles.titulo}>{titulo}</Text>
        {paragrafos.map((texto, i) => (
          <Text key={i} style={styles.paragrafo}>
            {texto}
          </Text>
        ))}
      </ScrollView>
      <Rodape itens={rodape} />
    </View>
  );
}

const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    backgroundColor: cores.azulSecao,
  },
  conteudo: {
    padding: 20,
    gap: 16,
  },
  titulo: {
    fontSize: 28,
    color: cores.branco,
    textAlign: "center",
    marginVertical: 12,
  },
  paragrafo: {
    fontSize: 16,
    lineHeight: 24,
    color: cores.branco,
  },
});

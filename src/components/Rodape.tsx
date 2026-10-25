import { Href, Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { cores } from "@/constants/tema";

type Item = { texto: string; href: Href };

export default function Rodape({ itens }: { itens: Item[] }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.rodape, { paddingBottom: insets.bottom + 10 }]}>
      {itens.map((item) => (
        <Link key={item.texto} href={item.href} asChild>
          <Pressable style={styles.item}>
            <Text style={styles.texto}>{item.texto}</Text>
          </Pressable>
        </Link>
      ))}
    </View>
  );
}

// Links padrão do rodapé das páginas institucionais
export const links = {
  solucoes: { texto: "Problemas e resoluções encontrados", href: "/Solucoes" } as Item,
  sobre: { texto: "Objetivo da empresa", href: "/Sobre" } as Item,
  detalhes: { texto: "Público alvo", href: "/Detalhes" } as Item,
};

const styles = StyleSheet.create({
  rodape: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 8,
    backgroundColor: cores.azulHeader,
    paddingTop: 12,
    paddingHorizontal: 12,
  },
  item: {
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
  texto: {
    color: cores.branco,
    fontSize: 14,
    textAlign: "center",
  },
});

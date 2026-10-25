import { StyleSheet, Text, View } from "react-native";

import Header from "@/components/Header";
import { cores } from "@/constants/tema";

export default function Orcamento() {
  return (
    <View style={styles.pagina}>
      <Header />
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>Orçamento</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    backgroundColor: cores.azulFundo,
  },
  conteudo: {
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    color: cores.preto,
  },
});

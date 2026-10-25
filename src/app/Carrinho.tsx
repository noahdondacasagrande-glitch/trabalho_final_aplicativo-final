import { StyleSheet, Text, View } from "react-native";

import Botao from "@/components/Botao";
import Header from "@/components/Header";
import { cores } from "@/constants/tema";

export default function Carrinho() {
  return (
    <View style={styles.pagina}>
      <Header />
      <View style={styles.area}>
        <View style={styles.titulo}>
          <Text style={styles.tituloTexto}>Seu carrinho:</Text>
        </View>
        <View style={styles.lista} />
        <View style={styles.pagar}>
          <Botao texto="PAGAR" onPress={() => {}} style={styles.botaoPagar} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    backgroundColor: cores.azulSecao,
  },
  area: {
    flex: 1,
    margin: 16,
    borderRadius: 22,
    backgroundColor: cores.carrinhoFundo,
    overflow: "hidden",
  },
  titulo: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: cores.botao,
    borderRadius: 22,
  },
  tituloTexto: {
    fontSize: 24,
    color: cores.branco,
  },
  lista: {
    flex: 1,
  },
  pagar: {
    alignItems: "flex-end",
    padding: 16,
  },
  botaoPagar: {
    width: 160,
    height: 48,
  },
});

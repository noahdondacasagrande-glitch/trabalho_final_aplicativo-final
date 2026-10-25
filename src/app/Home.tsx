import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import Header from "@/components/Header";
import { cores } from "@/constants/tema";
import { textos } from "@/constants/textos";

export default function Home() {
  return (
    <View style={styles.pagina}>
      <Header destino="/Home">
        <Link href="/Login" asChild>
          <Pressable style={styles.botaoLogin}>
            <Text style={styles.botaoLoginTexto}>Fazer Login</Text>
          </Pressable>
        </Link>
      </Header>

      <ScrollView contentContainerStyle={styles.conteudo}>
        <Text style={styles.titulo}>Sobre nós</Text>
        <Text style={styles.paragrafo}>{textos.objetivo}</Text>
        <Text style={styles.paragrafo}>{textos.publico}</Text>
        <Text style={styles.paragrafo}>{textos.perguntaPublico}</Text>
        <Text style={styles.paragrafo}>{textos.explicacaoPublico}</Text>
        <Text style={styles.paragrafo}>{textos.solucao}</Text>
        <Text style={styles.paragrafo}>{textos.problema}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    backgroundColor: cores.azulSecao,
  },
  botaoLogin: {
    backgroundColor: cores.botao,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  botaoLoginTexto: {
    color: cores.botaoBorda,
    fontSize: 16,
    fontWeight: "600",
  },
  conteudo: {
    padding: 20,
    gap: 16,
  },
  titulo: {
    fontSize: 32,
    color: cores.branco,
    marginVertical: 8,
  },
  paragrafo: {
    fontSize: 16,
    lineHeight: 24,
    color: cores.branco,
  },
});

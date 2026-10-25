import { Image } from "expo-image";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import Header from "@/components/Header";
import IconeLink from "@/components/IconeLink";
import Rodape, { links } from "@/components/Rodape";
import { imagens } from "@/constants/imagens";
import { cores } from "@/constants/tema";

const produtos = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Produto() {
  return (
    <View style={styles.pagina}>
      <Header>
        <IconeLink href="/Fale_conosco" imagem={imagens.fala} rotulo="Fale conosco" />
        <IconeLink href="/Carrinho" imagem={imagens.carrinho} rotulo="Carrinho" />
        <IconeLink href="/Detalhes" imagem={imagens.detalhes} rotulo="Detalhes" />
        <IconeLink href="/Area_cliente" imagem={imagens.login} rotulo="Área do cliente" />
      </Header>

      <View style={styles.pesquisa}>
        <TextInput
          style={styles.pesquisaInput}
          placeholder="Pesquisar"
          placeholderTextColor="#555"
          returnKeyType="search"
        />
      </View>

      <ScrollView contentContainerStyle={styles.cards}>
        {produtos.map((id) => (
          <View key={id} style={styles.card}>
            <View style={styles.cardImagem}>
              <Image source={imagens.caixa} style={styles.caixa} contentFit="contain" />
            </View>
            <View style={styles.cardDescricao}>
              <Pressable style={styles.comprar}>
                <Text style={styles.comprarTexto}>Comprar</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>

      <Rodape itens={[links.solucoes, links.sobre, links.detalhes]} />
    </View>
  );
}

const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    backgroundColor: cores.azulSecao,
  },
  pesquisa: {
    backgroundColor: cores.azulHeader,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  pesquisaInput: {
    height: 44,
    borderRadius: 103,
    backgroundColor: cores.branco,
    paddingHorizontal: 18,
    fontSize: 16,
    color: cores.preto,
  },
  cards: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 16,
    padding: 16,
  },
  card: {
    width: "48%",
    backgroundColor: cores.cardFundo,
    borderRadius: 10,
    overflow: "hidden",
  },
  cardImagem: {
    height: 130,
    margin: 8,
    borderRadius: 5,
    backgroundColor: cores.cardImagem,
    alignItems: "center",
    justifyContent: "center",
  },
  caixa: {
    width: 90,
    height: 90,
  },
  cardDescricao: {
    backgroundColor: cores.cardDescricao,
    padding: 10,
    alignItems: "flex-end",
  },
  comprar: {
    backgroundColor: cores.campo,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  comprarTexto: {
    fontSize: 14,
    color: cores.preto,
  },
});

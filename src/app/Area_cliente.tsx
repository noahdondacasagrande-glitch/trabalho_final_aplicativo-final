import { Image } from "expo-image";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import Campo from "@/components/Campo";
import Header from "@/components/Header";
import IconeLink from "@/components/IconeLink";
import { imagens } from "@/constants/imagens";
import { cores } from "@/constants/tema";

const etapas = [
  { texto: "Pedido feito", imagem: imagens.carrinho },
  { texto: "Saiu para entrega", imagem: imagens.entrega },
  { texto: "Chegou ao destino", imagem: imagens.local },
];

// Layout da tela "Área do cliente" conforme o export do Figma
export default function AreaCliente() {
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  return (
    <View style={styles.pagina}>
      <Header>
        <Link href="/Sobre" asChild>
          <Pressable style={styles.perfil}>
            <Image source={imagens.login} style={styles.perfilIcone} contentFit="contain" />
            <Text style={styles.perfilTexto}>Seu perfil</Text>
          </Pressable>
        </Link>
        <IconeLink href="/Carrinho" imagem={imagens.carrinho} rotulo="Carrinho" />
        <IconeLink href="/Detalhes" imagem={imagens.detalhes} rotulo="Detalhes" />
      </Header>

      <ScrollView contentContainerStyle={styles.conteudo} keyboardShouldPersistTaps="handled">
        <Text style={styles.titulo}>Dados pessoais</Text>

        <View style={styles.formulario}>
          <Campo
            rotulo="CPF ou CNPJ"
            placeholder="000.000.000-00"
            keyboardType="number-pad"
            value={cpf}
            onChangeText={setCpf}
          />

          {/* No Figma: caixa de Nome com 240px e Sobrenome com 213px */}
          <View style={styles.linha}>
            <View style={styles.nome}>
              <Campo rotulo="Nome" placeholder="Nome" value={nome} onChangeText={setNome} />
            </View>
            <View style={styles.sobrenome}>
              <Campo
                rotulo="Sobrenome"
                placeholder="Sobrenome"
                value={sobrenome}
                onChangeText={setSobrenome}
              />
            </View>
          </View>

          <Campo
            rotulo="Email"
            placeholder="Exemplo@gmail.com"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Campo
            rotulo="Telefone celular"
            placeholder="(+55) 00 000000000"
            keyboardType="phone-pad"
            value={telefone}
            onChangeText={setTelefone}
          />
        </View>

        <View style={styles.pedidos}>
          <Text style={styles.tituloPedidos}>Pedidos</Text>
          <View style={styles.etapas}>
            {etapas.map((etapa) => (
              <View key={etapa.texto} style={styles.etapa}>
                <Image source={etapa.imagem} style={styles.etapaIcone} contentFit="contain" />
                <Text style={styles.etapaTexto}>{etapa.texto}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.rodape}>
          <Image source={imagens.tubarao} style={styles.tubarao} contentFit="contain" />
          <Pressable onPress={() => router.replace("/Home")} style={styles.sair}>
            <Text style={styles.sairTexto}>Sair</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    backgroundColor: cores.azulFundo,
  },
  perfil: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  perfilIcone: {
    width: 28,
    height: 28,
  },
  perfilTexto: {
    color: cores.branco,
    fontSize: 14,
  },
  conteudo: {
    padding: 20,
    gap: 28,
    overflow: "hidden",
  },
  titulo: {
    fontSize: 24,
    color: cores.preto,
  },
  formulario: {
    gap: 16,
  },
  linha: {
    flexDirection: "row",
    gap: 12,
  },
  nome: {
    flex: 240,
  },
  sobrenome: {
    flex: 213,
  },
  pedidos: {
    gap: 20,
  },
  tituloPedidos: {
    fontSize: 24,
    color: cores.preto,
  },
  etapas: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  etapa: {
    flex: 1,
    alignItems: "center",
    gap: 8,
  },
  etapaIcone: {
    width: 56,
    height: 56,
  },
  etapaTexto: {
    fontSize: 14,
    textAlign: "center",
    color: cores.preto,
  },
  // "Sair" embaixo à esquerda e o tubarão cortado na lateral direita, como no Figma
  rodape: {
    height: 200,
    justifyContent: "flex-end",
  },
  tubarao: {
    position: "absolute",
    right: -70,
    bottom: 0,
    width: 240,
    height: 220,
  },
  sair: {
    alignSelf: "flex-start",
    paddingVertical: 8,
  },
  sairTexto: {
    fontSize: 24,
    color: cores.preto,
  },
});

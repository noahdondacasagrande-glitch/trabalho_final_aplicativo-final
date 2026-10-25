import { Image } from "expo-image";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import Botao from "@/components/Botao";
import Header from "@/components/Header";
import { cores } from "@/constants/tema";
import { imagens } from "@/constants/imagens";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [verSenha, setVerSenha] = useState(false);

  return (
    <View style={styles.pagina}>
      <Header destino="/Home" />

      <ScrollView contentContainerStyle={styles.conteudo} keyboardShouldPersistTaps="handled">
        <Text style={styles.titulo}>Acessar sua conta</Text>

        <View style={styles.entradas}>
          <View style={styles.entrada}>
            <Image source={imagens.google} style={styles.entradaIcone} contentFit="contain" />
            <Text style={styles.entradaTexto}>Entrar com Google</Text>
          </View>
          <View style={styles.entrada}>
            <Image source={imagens.email} style={styles.entradaIcone} contentFit="contain" />
            <Text style={styles.entradaTexto}>Entrar com Email</Text>
          </View>
        </View>

        <View style={styles.divisoria}>
          <View style={styles.linha} />
          <Text style={styles.divisoriaTexto}>ou</Text>
          <View style={styles.linha} />
        </View>

        <View style={styles.formulario}>
          <View style={styles.grupo}>
            <Text style={styles.rotulo}>CPF, CNPJ ou Email</Text>
            <TextInput
              style={styles.input}
              placeholder="CPF, CNPJ ou Email"
              placeholderTextColor="#444"
              autoCapitalize="none"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.grupo}>
            <Text style={styles.rotulo}>Senha</Text>
            <View style={styles.campoSenha}>
              <TextInput
                style={[styles.input, styles.inputSenha]}
                placeholder="Senha"
                placeholderTextColor="#444"
                secureTextEntry={!verSenha}
                autoCapitalize="none"
                value={senha}
                onChangeText={setSenha}
              />
              <Pressable
                style={styles.olho}
                onPress={() => setVerSenha((v) => !v)}
                accessibilityLabel={verSenha ? "Ocultar senha" : "Mostrar senha"}
              >
                <Image source={imagens.oculto} style={styles.olhoImagem} contentFit="contain" />
              </Pressable>
            </View>
          </View>

          <Botao texto="Entrar" onPress={() => router.replace("/Produto")} />

          <Link href="/Cadastro" style={styles.cadastro}>
            Não tem uma conta? Cadastre-se
          </Link>
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
  conteudo: {
    padding: 20,
    gap: 20,
  },
  titulo: {
    fontSize: 32,
    textAlign: "center",
    color: cores.preto,
  },
  entradas: {
    gap: 12,
  },
  entrada: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    height: 64,
    borderRadius: 5,
    backgroundColor: cores.botao,
  },
  entradaIcone: {
    width: 28,
    height: 28,
  },
  entradaTexto: {
    fontSize: 18,
    color: cores.branco,
  },
  divisoria: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  linha: {
    flex: 1,
    height: 1,
    backgroundColor: cores.preto,
  },
  divisoriaTexto: {
    fontSize: 18,
    color: cores.preto,
  },
  formulario: {
    gap: 18,
  },
  grupo: {
    gap: 6,
  },
  rotulo: {
    fontSize: 16,
    color: cores.preto,
  },
  input: {
    height: 56,
    backgroundColor: cores.campo,
    borderRadius: 5,
    paddingHorizontal: 12,
    fontSize: 16,
    color: cores.preto,
  },
  campoSenha: {
    justifyContent: "center",
  },
  inputSenha: {
    paddingRight: 52,
  },
  olho: {
    position: "absolute",
    right: 12,
    padding: 4,
  },
  olhoImagem: {
    width: 24,
    height: 24,
  },
  cadastro: {
    fontSize: 16,
    textAlign: "center",
    color: cores.preto,
    marginTop: 4,
  },
});

import { router } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native";

import Botao from "@/components/Botao";
import Campo from "@/components/Campo";
import Header from "@/components/Header";
import { cores } from "@/constants/tema";

export default function Cadastro() {
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.pagina}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Header destino="/Home" />

      <ScrollView contentContainerStyle={styles.conteudo} keyboardShouldPersistTaps="handled">
        <View style={styles.titulo}>
          <Text style={styles.tituloTexto}>Vamos criar sua conta</Text>
          <Text style={styles.subtitulo}>
            Os campos abaixo são essenciais para criarmos sua conta SHARK3D
          </Text>
        </View>

        <Campo
          rotulo="Informe seu CPF ou CNPJ"
          placeholder="000.000.000-00"
          keyboardType="number-pad"
          value={cpf}
          onChangeText={setCpf}
        />
        <Campo
          rotulo="Telefone celular"
          placeholder="(+55) 00 000000000"
          keyboardType="phone-pad"
          value={telefone}
          onChangeText={setTelefone}
        />

        <View style={styles.linha}>
          <View style={styles.metade}>
            <Campo rotulo="Nome" placeholder="Nome" value={nome} onChangeText={setNome} />
          </View>
          <View style={styles.metade}>
            <Campo
              rotulo="Sobrenome"
              placeholder="Sobrenome"
              value={sobrenome}
              onChangeText={setSobrenome}
            />
          </View>
        </View>

        <Campo
          rotulo="Criar senha"
          placeholder="Criar senha"
          secureTextEntry
          autoCapitalize="none"
          value={senha}
          onChangeText={setSenha}
        />

        <View style={styles.botoes}>
          <Botao texto="Continuar" variante="neutro" onPress={() => router.replace("/Produto")} />
          <Botao texto="Voltar" variante="neutro" onPress={() => router.replace("/Home")} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    backgroundColor: cores.azulFundo,
  },
  conteudo: {
    padding: 20,
    gap: 18,
  },
  titulo: {
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  tituloTexto: {
    fontSize: 30,
    textAlign: "center",
    color: cores.preto,
  },
  subtitulo: {
    fontSize: 16,
    textAlign: "center",
    color: cores.preto,
  },
  linha: {
    flexDirection: "row",
    gap: 12,
  },
  metade: {
    flex: 1,
  },
  botoes: {
    gap: 12,
    marginTop: 8,
  },
});

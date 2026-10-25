import { useState } from "react";
import { Linking, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import Botao from "@/components/Botao";
import Header from "@/components/Header";
import { cores } from "@/constants/tema";

const CONTATO = "5541999999999";

export default function FaleConosco() {
  const [mensagem, setMensagem] = useState("");

  function mandar() {
    if (!mensagem.trim()) return;
    Linking.openURL(`https://wa.me/${CONTATO}?text=${encodeURIComponent(mensagem)}`);
  }

  return (
    <View style={styles.pagina}>
      <Header />
      <ScrollView contentContainerStyle={styles.conteudo} keyboardShouldPersistTaps="handled">
        <Text style={styles.titulo}>Fale com nossa equipe</Text>
        <Text style={styles.subtitulo}>Seu tópico de ajuda</Text>
        <TextInput
          style={styles.input}
          placeholder="Escreva..."
          placeholderTextColor="#555"
          multiline
          textAlignVertical="top"
          value={mensagem}
          onChangeText={setMensagem}
        />
        <View style={styles.botao}>
          <Botao texto="Enviar" onPress={mandar} style={styles.botaoEnviar} />
        </View>
      </ScrollView>
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
    textAlign: "center",
    color: cores.branco,
  },
  subtitulo: {
    fontSize: 20,
    color: cores.branco,
    marginTop: 12,
  },
  input: {
    minHeight: 220,
    borderRadius: 5,
    backgroundColor: cores.branco,
    padding: 12,
    fontSize: 16,
    color: cores.preto,
  },
  botao: {
    alignItems: "flex-start",
  },
  botaoEnviar: {
    backgroundColor: cores.cinzaBotao,
    width: 140,
    height: 48,
  },
});

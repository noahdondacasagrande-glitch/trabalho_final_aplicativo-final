import { Pressable, StyleSheet, Text, ViewStyle } from "react-native";

import { cores } from "@/constants/tema";

type Props = {
  texto: string;
  onPress: () => void;
  variante?: "principal" | "neutro";
  style?: ViewStyle;
};

export default function Botao({ texto, onPress, variante = "principal", style }: Props) {
  const principal = variante === "principal";

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.botao,
        principal ? styles.principal : styles.neutro,
        pressed && styles.pressionado,
        style,
      ]}
    >
      <Text style={[styles.texto, principal && styles.textoPrincipal]}>{texto}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    height: 56,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  principal: {
    backgroundColor: cores.botao,
  },
  neutro: {
    backgroundColor: cores.campo,
  },
  pressionado: {
    opacity: 0.8,
  },
  texto: {
    fontSize: 18,
    color: cores.preto,
  },
  textoPrincipal: {
    color: cores.branco,
  },
});

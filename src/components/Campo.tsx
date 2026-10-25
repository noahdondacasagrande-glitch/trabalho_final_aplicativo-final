import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";

import { cores } from "@/constants/tema";

type Props = TextInputProps & { rotulo: string };

export default function Campo({ rotulo, style, ...resto }: Props) {
  return (
    <View style={styles.grupo}>
      <Text style={styles.rotulo}>{rotulo}</Text>
      <TextInput
        placeholderTextColor="#444"
        style={[styles.input, style]}
        {...resto}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
});

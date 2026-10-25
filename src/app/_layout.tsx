import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, useWindowDimensions, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const { width, height } = useWindowDimensions();

  // No navegador (computador) o app aparece dentro de uma moldura de celular.
  // No celular de verdade e em telas pequenas ele ocupa a tela inteira.
  const moldura = Platform.OS === "web" && width > 600;

  const conteudo = (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="Home" />
        <Stack.Screen name="Login" />
        <Stack.Screen name="Cadastro" />
        <Stack.Screen name="Produto" />
        <Stack.Screen name="Carrinho" />
        <Stack.Screen name="Fale_conosco" />
        <Stack.Screen name="Area_cliente" />
        <Stack.Screen name="Orcamento" />
        <Stack.Screen name="Sobre" />
        <Stack.Screen name="Solucoes" />
        <Stack.Screen name="Detalhes" />
      </Stack>
    </SafeAreaProvider>
  );

  if (!moldura) return conteudo;

  return (
    <View style={styles.fundo}>
      <View style={[styles.celular, { height: Math.min(844, height - 40) }]}>{conteudo}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0F172A",
  },
  celular: {
    width: 390,
    borderRadius: 44,
    borderWidth: 10,
    borderColor: "#111111",
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
  },
});

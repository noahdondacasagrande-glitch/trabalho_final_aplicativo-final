import { Image } from "expo-image";
import { Href, Link } from "expo-router";
import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { cores } from "@/constants/tema";
import { imagens } from "@/constants/imagens";

type Props = {
  /** Para onde o logo leva. Padrão: /Produto */
  destino?: Href;
  /** Itens da direita (ícones, botões...) */
  children?: ReactNode;
};

export default function Header({ destino = "/Produto", children }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.header, { paddingTop: insets.top + 8 }]}>
      <Link href={destino} asChild>
        <Pressable style={styles.logo} accessibilityLabel="SHARK3D">
          <Image source={imagens.logo} style={styles.logoImagem} contentFit="contain" />
          <Text style={styles.logoTexto}>SHARK3D</Text>
        </Pressable>
      </Link>
      {children ? <View style={styles.direita}>{children}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: cores.azulHeader,
    paddingHorizontal: 16,
    paddingBottom: 8,
    minHeight: 72,
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  logoImagem: {
    width: 40,
    height: 40,
  },
  logoTexto: {
    color: cores.branco,
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  direita: {
    marginLeft: "auto",
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
});

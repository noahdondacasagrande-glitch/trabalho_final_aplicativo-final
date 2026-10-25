import { Image, ImageSource } from "expo-image";
import { Href, Link } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

type Props = {
  href: Href;
  imagem: ImageSource | number;
  rotulo: string;
  tamanho?: number;
};

export default function IconeLink({ href, imagem, rotulo, tamanho = 28 }: Props) {
  return (
    <Link href={href} asChild>
      <Pressable accessibilityLabel={rotulo} hitSlop={8} style={styles.botao}>
        <Image source={imagem} style={{ width: tamanho, height: tamanho }} contentFit="contain" />
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  botao: {
    alignItems: "center",
    justifyContent: "center",
  },
});

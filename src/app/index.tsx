import { Redirect } from "expo-router";

// A rota inicial abre a Home (igual ao "/" do site)
export default function Index() {
  return <Redirect href="/Home" />;
}

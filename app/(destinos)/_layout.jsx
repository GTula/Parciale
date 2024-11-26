import { Stack } from "expo-router";

export default function DestinosLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ title: "Destinos" }} />
      <Stack.Screen name="[id]" options={{ title: "Detalles del Destino" }} />
    </Stack>
  );
}

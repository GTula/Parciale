import { Stack } from "expo-router";
import { ReloadPageProvider } from "../auxiliar/reload";

export default function RootLayout() {
  return (
    <ReloadPageProvider>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />

    </Stack>
    </ReloadPageProvider>
  );
}

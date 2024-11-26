import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Configuraciones</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000" },
  text: { fontSize: 24, color: "#fff" },
});
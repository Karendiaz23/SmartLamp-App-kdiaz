import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";

export default function Scan() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Escanear código QR
      </Text>

      <Text
        style={{
          textAlign: "center",
          marginBottom: 40,
        }}
      >
        Escaneá el código QR que viene con la lámpara para comenzar la configuración.
      </Text>

      <View
        style={{
          width: 220,
          height: 220,
          borderWidth: 3,
          borderColor: "#007AFF",
          borderRadius: 20,
          marginBottom: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>📷 QR</Text>
      </View>

      <Pressable
        onPress={() => router.push("/wifi")}
        style={{
          backgroundColor: "#007AFF",
          padding: 15,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Simular QR escaneado
        </Text>
      </Pressable>
    </View>
  );
}
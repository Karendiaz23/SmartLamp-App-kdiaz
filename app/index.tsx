import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";

export default function Home() {
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
          fontSize: 32,
          fontWeight: "bold",
          marginBottom: 15,
        }}
      >
        SmartLamp
      </Text>

      <Text
        style={{
          textAlign: "center",
          marginBottom: 40,
        }}
      >
        Configuración inicial de una lámpara inteligente ESP32
      </Text>

      <Pressable
        onPress={() => router.push("/scan")}
        style={{
          backgroundColor: "#007AFF",
          paddingHorizontal: 30,
          paddingVertical: 15,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Comenzar configuración
        </Text>
      </Pressable>
    </View>
  );
}
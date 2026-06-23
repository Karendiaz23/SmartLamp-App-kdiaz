import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";

export default function Result() {
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
          fontSize: 60,
        }}
      >
        ✅
      </Text>

      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginTop: 20,
        }}
      >
        Configuración exitosa
      </Text>

      <Pressable
        onPress={() => router.push("/control")}
        style={{
          backgroundColor: "#007AFF",
          padding: 15,
          borderRadius: 10,
          marginTop: 40,
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          Ir al control
        </Text>
      </Pressable>
    </View>
  );
}
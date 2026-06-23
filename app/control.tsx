import { View, Text, Pressable } from "react-native";
import { useState } from "react";

export default function Control() {
  const [encendida, setEncendida] = useState(false);

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
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 40,
        }}
      >
        Control de la lámpara
      </Text>

      <Text
        style={{
          fontSize: 22,
          marginBottom: 30,
        }}
      >
        Estado: {encendida ? "💡 Encendida" : "⚫ Apagada"}
      </Text>

      <Pressable
        onPress={() => setEncendida(!encendida)}
        style={{
          backgroundColor: encendida ? "#d9534f" : "#28a745",
          paddingHorizontal: 40,
          paddingVertical: 15,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          {encendida ? "Apagar" : "Encender"}
        </Text>
      </Pressable>
    </View>
  );
}
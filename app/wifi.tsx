import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { router } from "expo-router";

export default function Wifi() {
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 25,
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 30,
          textAlign: "center",
        }}
      >
        Configurar WiFi
      </Text>

      <Text>Nombre de la red (SSID)</Text>

      <TextInput
        placeholder="Ej: MiCasa"
        value={ssid}
        onChangeText={setSsid}
        style={{
          borderWidth: 1,
          borderRadius: 10,
          padding: 12,
          marginBottom: 20,
          marginTop: 5,
        }}
      />

      <Text>Contraseña</Text>

      <TextInput
        placeholder="********"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{
          borderWidth: 1,
          borderRadius: 10,
          padding: 12,
          marginBottom: 40,
          marginTop: 5,
        }}
      />

      <Pressable
        onPress={() => router.push("/loading")}
        style={{
          backgroundColor: "#007AFF",
          padding: 15,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Configurar dispositivo
        </Text>
      </Pressable>
    </View>
  );
}
import { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { router } from "expo-router";

export default function Loading() {

  useEffect(() => {

    setTimeout(() => {
      router.replace("/result");
    }, 3000);

  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" />

      <Text
        style={{
          marginTop: 20,
          fontSize: 18,
        }}
      >
        Configurando dispositivo...
      </Text>
    </View>
  );
}
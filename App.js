import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import LoginInput from "./components/LoginInput";
export default function App() {
  return (
    <ImageBackground
      source={require("./assets/images/background.jpg")}
      style={styles.container}
    >
      <View style={styles.container}>
        <LoginInput name="Nombre" placeholder="Nombre" type="text" />
        <LoginInput name="Contraseña" placeholder="*********" type="password" />
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#6EA85033",
    justifyContent: "center",
    backgroundSize: "cover",
  },
});

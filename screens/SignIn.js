import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, ImageBackground, Image, Text } from "react-native";
import LoginInput from "../components/LoginInput";
import CustomButton from "../components/CustomButton";
import { BlurView } from "expo-blur";
export default function SignIn({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ImageBackground
      source={require("../assets/images/background.jpg")}
      style={styles.container}
    >
      <BlurView
        intensity={8}
        blurReductionFactor={4}
        tint="dark"
        style={styles.blurContainer}
      >
        <View style={styles.container}>
          <View style={styles.welcome}>
            <Image
              source={require("../assets/images/icon.png")}
              style={styles.welcome_image}
            />
            <Text style={styles.welcome_text}>¡Bienvenido a ChefList!</Text>
          </View>
          <LoginInput name="Nombre" placeholder="Nombre" type="text" />
          <LoginInput
            name="Correo Electrónico"
            placeholder="ejemplo@email.com"
            type="text"
          />
          <LoginInput
            name="Contraseña"
            placeholder="*********"
            type="password"
          />
          <LoginInput
            name="Confirmar Contraseña"
            placeholder="*********"
            type="password"
          />
          <View
            style={{
              alignItems: "flex-end",
              width: "100%",
              paddingRight: 24,
              flexDirection: "column",
            }}
          >
            <CustomButton text="Registrarse" color="#F28B0C" />
          </View>
          <Text style={{ color: "rgba(166, 166, 166, 1)", fontSize: 18, fontWeight:"300",paddingTop:20 }}>
            ¿Ya tienes una cuenta?{" "}
            <Text style={{ textDecorationLine: "underline", fontWeight:"600"}}>
              Inicia sesión
            </Text>
          </Text>
          <StatusBar style="auto" />
        </View>
      </BlurView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "rgba(110, 168, 80, 0.05)",
    justifyContent: "center",
    backgroundSize: "cover",
  },
  welcome: {
    alignItems: "center",
    color: "#FFF",
    flexDirection: "column",
  },
  welcome_text: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "600",
    marginBottom: 20,
    paddingTop: 30,
  },
  welcome_image: {
    width: 140,
    height: 135,
    paddingBottom: 20,
  },
  blurContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

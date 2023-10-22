import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground, Image, Text } from "react-native";
import LoginInput from "./components/LoginInput";
export default function App() {
  return (
    <ImageBackground
      source={require("./assets/images/background.jpg")}
      style={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Image source={require("./assets/images/icon.png")} 
          style={{ width: 170, height: 230 }}
          />
          <Text style={styles.welcome_text}>Bienvenido a ChefList!</Text>
          </View>
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
  welcome: {
    alignItems: "center",
    color: "#FFF",
    paddingTop: 40,
    paddingBottom: 40,
    flexDirection: "column",
  },
  welcome_text: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "600",
    marginBottom: 20,
  }
});

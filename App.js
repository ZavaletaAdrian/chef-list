import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  AppRegistry,
} from "react-native";
import {useFonts} from "expo-font";
import NunitoFont from "./assets/fonts/NunitoSans.ttf";
import LoginInput from "./components/LoginInput";

export default function App() {
  AppRegistry.registerComponent("Nunito", () => NunitoFont);
  AppRegistry.runApplication(App, {
    initialProps: {},
    rootTag: document.getElementById("root"),
  });
  (async () => {
    await Font.loadAsync({
      Nunito: NunitoFont,
    });
  })();
  return (
    <ImageBackground
      source={require("./assets/images/background.jpg")}
      style={styles.container}
    >
      <View style={styles.container}>
        <LoginInput name="Nombre" placeholder="Nombre"/>
        <Text>Open up App.js to start working on your app!</Text>
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

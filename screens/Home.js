import React, { useEffect } from "react";
import { Text } from "react-native";
import NavBar from "../components/NavBar";
import disableBackButton from "../util/disableBackButton";

export default function Home({ navigation }) {
  const logoutHandler = () => {
    navigation.navigate("Login");
  }
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  disableBackButton();
  return (
    <>
      <NavBar />
      <Text onPress={logoutHandler}>Home Screen!</Text>
    </>
  );
}

import React, { useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView, View, Text, BackHandler } from "react-native";
import NavBar from "../components/NavBar";

export default function Home({ navigation }) {
  const logoutHandler = () => {
    navigation.navigate("Login");
  }
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
          return true;
        };
      const subscription = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress
      );
      return () => subscription.remove();
    }, [])
  );
  return (
    <>
      <NavBar />
      <Text onPress={logoutHandler}>Home Screen!</Text>
    </>
  );
}

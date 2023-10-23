import React, { useEffect } from "react";
import { ScrollView, View, Text } from "react-native";
import NavBar from "../components/NavBar";

export default function Home({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <NavBar />
      <Text>Home Screen!</Text>
    </>
  );
}

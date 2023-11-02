import React, { useEffect } from "react";
import { Text, View, StyleSheet,  ScrollView } from "react-native";
import NavBar from "../components/NavBar";
import disableBackButton from "../util/disableBackButton";
import LowerBar from "../components/LowerBar";
import FoodSection from "../components/FoodSection";

export default function Home({ navigation }) {
  const DATA =  require('../data/comida.json');
  
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  disableBackButton();

  return (
    <>
      <NavBar />
      <ScrollView style={styles.mainContainer}>
        <FoodSection title="¡Platillos para tu comida! 👨‍🍳" data={DATA}/>
      </ScrollView>
      <LowerBar />
    </>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 40,
  },
});

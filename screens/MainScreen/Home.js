import React, {useEffect} from "react";
import { ScrollView, StyleSheet } from "react-native";
import NavBar from "../../components/NavBar";
import FoodSection from "../../components/FoodSection";

export default function Home({navigation}) {
  const DATA = require("../../data/comida.json");
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <NavBar />
      <ScrollView style={styles.mainContainer}>
        <FoodSection title="¡Platillos para tu comida! 👨‍🍳" recipes={DATA} />
        <FoodSection title="Trending 🔥" recipes={DATA} />
      </ScrollView>
      
    </>
  );
}
const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      paddingTop: 40,
    },
  });
  
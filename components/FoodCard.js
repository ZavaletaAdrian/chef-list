import React, { useContext } from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import CustomButton from "./CustomButton";
//Context
import MainNavContext from "../context/MainNavContext";

export default function FoodCard({ recipe }) {
  const navigation = useContext(MainNavContext);
  function handleViewRecipe() {
    console.log("Ver receta");
    navigation.navigate("Details", {
      recipe,
    });
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: recipe.image,
        }}
        style={styles.imageContainer}
      >
        <View style={styles.textContainer}>
          <Text style={styles.textImage}>{recipe.name}</Text>
        </View>
      </ImageBackground>
      <View style={styles.infoFood}>
        <Text style={{ fontSize: 10 }}>
          ⏲️ {recipe.cookingTime} minutos{" "}
          <Text style={{ color: "gray" }}>
            {" "}
            • {recipe.ingredients.length} ingredientes
          </Text>
        </Text>
        <CustomButton
          text="Detalles 🔎"
          color="#F28B0C"
          action={handleViewRecipe}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 17,
  },
  imageContainer: {
    width: 250,
    height: 250,
    flex: 1,
    resizeMode: "cover",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    color: "white",
    marginBottom: 10,
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    borderTopRightRadius: 10,
  },
  textImage: {
    color: "white",
    fontSize: 15,
    padding: 10,
  },
  infoFood: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

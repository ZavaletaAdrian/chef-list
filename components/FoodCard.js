import React from "react";
import { Text, StyleSheet, View, Image, ImageBackground } from "react-native";
import CustomButton from "./CustomButton";

export default function FoodCard({
  name,
  image,
  ingredients,
  cookingTime,
  type,
}) 
{
  function handleViewRecipe(){
    console.log("Ver receta")
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: image,
        }}
        style={styles.imageContainer}
      >
        <View style={styles.textContainer}>
          <Text style={styles.textImage}>{name}</Text>
        </View>
      </ImageBackground>
      <View style={styles.infoFood}>
        <Text style={{ fontSize: 10 }}>
          ⏲️ {cookingTime} minutos{" "}<Text style={{ color: "gray" }}> • {ingredients.length} ingredientes
          </Text>
        </Text>
        <CustomButton text="Ver receta" color="#F28B0C" action={handleViewRecipe} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
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
  }
});

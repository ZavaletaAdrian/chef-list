import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import GrayVerticalLine from "../../assets/svgs/GrayVerticalLine";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "../../components/CustomButton";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Details({ route, navigation }) {
  const recipe = route.params.recipe;
  let savedIngredients = [];
  const [saved, setSaved] = useState(false);
  function handleCheckIngredient(ingredient) {
    if (savedIngredients.includes(ingredient)) {
      savedIngredients = savedIngredients.filter(
        (savedIngredient) => savedIngredient !== ingredient
      );
    } else {
      savedIngredients.push(ingredient);
    }
    console.log(savedIngredients);
  }
  async function handleSaveIngredients() {
    // Add name of the recipe and the ingredients
    const recipeToSave = {
      id: recipe.id,
      name: recipe.name,
      ingredients: savedIngredients,
    };
    try {
      let previousRecipes = await AsyncStorage.getItem("Recetas");
      //Add previous recipes
      console.log(`Recetas previas: \n${previousRecipes}`)
      previousRecipes = JSON.parse(previousRecipes);
      previousRecipes.push(recipeToSave);
      console.log(`Recetas nuevas: \n${savedIngredients}`)
      //Save
      await AsyncStorage.setItem("Recetas", JSON.stringify(previousRecipes));
      console.log("Ingredientes:");
      savedIngredients.forEach((ingredient) => console.log(ingredient.name));
      console.log(savedIngredients);
      setSaved(true);
    } catch (error) {
      console.log(error);
      await AsyncStorage.setItem("Recetas", JSON.stringify([recipeToSave]));
    } finally {
      // console.log("Ingredientes:");
      // savedIngredients.forEach((ingredient) => console.log(ingredient.name));
      setSaved(true);
      console.log("Recetas guardadas:");
      console.log(await AsyncStorage.getItem("Recetas"));
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.detailsContainer}>
      <View style={styles.foodName}>
        <Text style={styles.foodNameText}>{recipe.name}</Text>
      </View>
      <Image
        source={{ uri: recipe.image }}
        style={{ height: 290, width: 290, borderRadius: 20 }}
      />
      <View style={styles.portionsTimeContainer}>
        <View style={styles.portionsContainer}>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/images/Portions.png")}
              style={{ height: 24, width: 24 }}
            />
            <Text>Porciones</Text>
          </View>
          <GrayVerticalLine height={40} color="gray" />
          <Text style={{ fontSize: 20 }}>{recipe.portions}</Text>
        </View>
        <GrayVerticalLine height={50} color="black" />
        <View style={styles.portionsContainer}>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/images/clock.png")}
              style={{ height: 24, width: 24 }}
            />
            <Text>Tiempo</Text>
          </View>
          <GrayVerticalLine height={40} color="gray" />
          <Text style={{ fontSize: 18 }}>
            {recipe.cookingTime} <Text style={{ fontSize: 10 }}>min</Text>
          </Text>
        </View>
      </View>

      <LinearGradient
        colors={["#FFDAB1", "transparent"]}
        locations={[0.8, 1]}
        style={styles.utensils}
      >
        <Text style={{ fontSize: 20, fontWeight: "600", paddingVertical: 5 }}>
          Utensilios
        </Text>
        {recipe.utensils.map((utensil) => (
          <Text key={utensil.id}>{utensil.name}</Text>
        ))}
      </LinearGradient>
      <LinearGradient
        colors={["#DFF8D1", "transparent"]}
        locations={[0.8, 1]}
        style={styles.utensils}
      >
        <Text style={{ fontSize: 20, fontWeight: "600", paddingVertical: 5 }}>
          Ingredientes
        </Text>
        <View style={{ gap: 5 }}>
          {recipe.ingredients.map((ingredient) => (
            <BouncyCheckbox
              key={ingredient.id}
              text={ingredient.name}
              textStyle={{ color: "black" }}
              onPress={() => handleCheckIngredient(ingredient)}
            />
          ))}
        </View>
        <View style={{ display: "flex", marginTop: 10, marginLeft: 120 }}>
          {saved ? (
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 18 }}>Guardado ✅</Text>
            </View>
          ) : (
            <CustomButton
              text="Guardar 🔖"
              color="#F28B0C"
              action={handleSaveIngredients}
            />
          )}
        </View>
      </LinearGradient>
      {/* Gradient color #FEFFCF */}
      <LinearGradient
        colors={["#FEFFCF", "transparent"]}
        locations={[0.8, 1]}
        style={styles.utensils}
      >
        <Text style={{ fontSize: 20, fontWeight: "600", paddingVertical: 5 }}>
          Pasos
        </Text>
        {recipe.steps.map((step) => (
          <Text key={step.id}>{step.description}</Text>
        ))}
      </LinearGradient>
      <View style={styles.kcal}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/images/kcal.png")}
            style={{ height: 24, width: 24 }}
          />
          <Text>Valor Nutricional</Text>
        </View>
        <GrayVerticalLine height={40} color="gray" />
        <Text style={{ fontSize: 20 }}>
          {recipe.kcal} <Text style={{ fontSize: 16 }}>kcal</Text>
        </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  detailsContainer: {
    display: "flex",
    paddingHorizontal: 30,
    paddingVertical: 20,
    gap: 20,
    backgroundColor: "white",
    alignItems: "center",
  },
  foodName: {
    borderRadius: 60,
    backgroundColor: "#FFB000",
    padding: 20,
    alignSelf: "center",
  },
  foodNameText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  portionsTimeContainer: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 9,
    paddingHorizontal: 12,
    backgroundColor: "#F1FCEC",
    alignItems: "center",
    borderRadius: 10,
    gap: 24,
  },
  portionsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  utensils: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 45,
    borderRadius: 15,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    width: 290,
  },
  kcal: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 55,
    backgroundColor: "#E6DEDE",
    alignItems: "center",
    borderRadius: 30,
    gap: 24,
  },
});

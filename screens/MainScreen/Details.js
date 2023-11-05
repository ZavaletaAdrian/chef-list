import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import GrayVerticalLine from "../../assets/svgs/GrayVerticalLine";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "../../components/CustomButton";

export default function Details({ route, navigation }) {
  const recipe = route.params;
  console.log(recipe);
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
          <Text>{utensil}</Text>
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
        {recipe.ingredients.map((ingredient) => (
          <Text>{ingredient}</Text>
        ))}
        <View>
          <CustomButton
            text="Preparación"
            color="#F28B0C"
            // action={handleViewRecipe}
          />
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
          <Text>{step}</Text>
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

import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import FoodCard from "./FoodCard";

//Title es el titulo de la sección general
//Data son los datos recabados de un JSON
const FoodSection = ({ data, title }) => {
  return (
    <View>
      <Text style={styles.titleSection}>{title}</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.scrollContainer}
      >
        {data.map((item) => {
          return (
            <View key={item.id} style={styles.itemScroll}>
              <FoodCard
                name={item.name}
                image={item.image}
                ingredients={item.ingredients}
                cookingTime={item.cookingTime}
                type={item.type}
                portions={item.portions}
                steps={item.steps}
                utensils={item.utensils}
                kcal={item.kcal}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
    padding: 20,
    marginLeft: 20,
    marginVertical: 10,
  },
  itemScroll: {
    marginRight: 20,
  },
  titleSection: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
  },
});

export default FoodSection;

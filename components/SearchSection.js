import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function SearchSection({ name, type, action }) {
  let imageIcon = "";
  switch (name) {
    case "Desayuno":
      imageIcon = require("../assets/images/search/Desayuno.png");
      break;
    case "Lunch":
      imageIcon = require("../assets/images/search/Lunch.png");
      break;
    case "Bebidas":
      imageIcon = require("../assets/images/search/Bebidas.png");
      break;
    case "Entradas":
      imageIcon = require("../assets/images/search/Entradas.png");
      break;
    case "Botanas":
      imageIcon = require("../assets/images/search/Botanas.png");
      break;
    case "Plato Fuerte":
      imageIcon = require("../assets/images/search/Plato_Fuerte.png");
      break;
    case "Postres":
      imageIcon = require("../assets/images/search/Postres.png");
      break;
  }
  return (
    <TouchableOpacity onPress={()=>action(name)}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionText}>{name}</Text>
        <Image style={styles.sectionImg} source={imageIcon} />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 8,
    display: "flex",
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#E3E1E1",
    borderRadius: 15,
  },
  sectionText: {
    fontSize: 24,
  },
  sectionImg: {
    width: 50,
    height: 50,
  },
});

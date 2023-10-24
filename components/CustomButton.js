import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

export default function CustomButton({ text, color, action }) {

  const styles = StyleSheet.create({
    button_login: {
      width: 170,
      height: 55,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      backgroundColor:  color,
    },
  });
  return (
    <View>
    <TouchableOpacity style={styles.button_login} onPress={action}>
      <Text style={{ fontSize: 22, color: "white" }}>{text}</Text>
    </TouchableOpacity>
    </View>
  );
}

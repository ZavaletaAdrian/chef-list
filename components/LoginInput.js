import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
export default function LoginInput({ name, placeholder, type }) {
  return (
    <>
      <Text style={styles.name_input}>{name}</Text>
      <TextInput
        style={styles.input_login}
        placeholder={placeholder}
        secureTextEntry = {type === "password" ? true : false}
      ></TextInput>
    </>
  );
}
const styles = StyleSheet.create({
  input_login: {
    width: "90%",
    height: 55,
    borderColor: "#000",
    backgroundColor: "#fff",
    borderWidth: 2,
    borderRadius: 5,
    fontSize: 22,
    paddingLeft: 10,
    marginBottom: 20,
  },
  name_input: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "400",
    alignSelf: "flex-start",
    marginLeft: "5.5%",
    marginBottom: 5,
  }
});

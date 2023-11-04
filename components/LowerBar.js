import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import House from "../assets/svgs/House";
import Lupa from "../assets/svgs/Lupa";
import CameraIcon from "../assets/svgs/CameraIcon";
import ProfileIcon from "../assets/svgs/ProfileIcon";
export default function LowerBar({ navigation }) {
  function handleSearchPress() {
    console.log("Search");
    navigation.navigate("Search");
  }
  return (
    <View style={styles.lowerbar}>
<House navigation={navigation}/>
      <TouchableOpacity onPress={handleSearchPress}>
        <Search />
      </TouchableOpacity>
      <TouchableOpacity>
        <Camera />
      </TouchableOpacity>
      <TouchableOpacity>
        <Profile />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  lowerbar: {
    display: "inline-flex",
    height: 66,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 65,
    flexShrink: 0,
    backgroundColor: "#537D3D",
  },
});

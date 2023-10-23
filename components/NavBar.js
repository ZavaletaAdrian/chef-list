import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import List from "../assets/svgs/List";

const NavBar = () => {
  return (
    <>
      <View style={styles.navbar}>
        <Image
          style={styles.images}
          source={require("../assets/images/icon.png")}
        />
        <View style={styles.list}>
          <List />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  navbar: {
    paddingTop: 30,
    backgroundColor: "#6EA850",
    height: 100,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    padding: 15,
  },
  images: {
    width: 56,
    height: 54,
  },
  list: {
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 18,
  },
});

export default NavBar;

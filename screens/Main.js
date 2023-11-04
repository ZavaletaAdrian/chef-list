import React, { useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import disableBackButton from "../util/disableBackButton";
import House from "../assets/svgs/House";
import Home from "./app/Home";
import Search from "./app/Search";
import Lupa from "../assets/svgs/Lupa";
import Camera from "./app/Camera";
import Profile from "./app/Profile";
import CameraIcon from "../assets/svgs/CameraIcon";
import ProfileIcon from "../assets/svgs/ProfileIcon";

export default function Main({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const Tab = createBottomTabNavigator();
  disableBackButton();
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: styles.lowerbar }}>
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <House />,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <Lupa />,
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <CameraIcon />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <ProfileIcon />,
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  lowerbar: {
    display: "inline-flex",
    height: 70,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    backgroundColor: "#537D3D",
  },
});

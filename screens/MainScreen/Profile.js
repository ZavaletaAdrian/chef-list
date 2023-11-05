import React, {useEffect} from "react";
import { View, Text } from "react-native";
import NavBar from "../../components/NavBar";

export default function Profile({navigation}) {
    useEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, []);
  return (
    <>
    <NavBar/>
      <Text>Profile</Text>
    </>
  );
}

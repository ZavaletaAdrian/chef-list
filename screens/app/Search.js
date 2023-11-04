import React, {useEffect} from "react";
import { View, Text, ScrollView } from "react-native";
import NavBar from "../../components/NavBar";
import House from "../../assets/svgs/House";
import LowerBar from "../../components/LowerBar";

export default function Search({navigation}) {
    useEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, []);
return (
    <>
    <NavBar />
    <View>
      <Text>Hi</Text>
    </View>
    </>
  );
}

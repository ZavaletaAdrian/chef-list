import React, { useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import NavBar from "../components/NavBar";
import disableBackButton from "../util/disableBackButton";
import LowerBar from "../components/LowerBar";

export default function Home({ navigation }) {
  const logoutHandler = () => {
    navigation.navigate("Login");
  };
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  disableBackButton();
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  return (
    <>
      <NavBar />
      <View style={styles.mainContainer}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        />        
        <LowerBar />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

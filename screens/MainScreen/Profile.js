import React, {useEffect, useState} from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import NavBar from "../../components/NavBar";

export default function Profile({ navigation }) {
  const [profileImage, setProfileImage] = useState(require("../../assets/images/profile.png"));

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const changeProfileImage = () => {
    
  };


  return (
    <>
      <NavBar />
      <TouchableOpacity onPress={changeProfileImage} style={styles.profileImageContainer}>
        <Image source={profileImage} style={styles.profileImage} />
      </TouchableOpacity>
      <Text>Perfil</Text>
    </>
  );
}

const styles = StyleSheet.create({
  profileImageContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100, 
    borderWidth: 3,
    borderColor: "#537D3D",
  },
});

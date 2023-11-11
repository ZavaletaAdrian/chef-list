import React, { useEffect, useState } from "react";
import { View, Button, Image, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import NavBar from "../../components/NavBar";

export default function Camera({ navigation}) {
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

  }, []);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setSelectedImage(result.uri);
        uploadImage(result);
      }
    } catch (error) {
      console.error("Error picking an image:", error);
    }
  };

  const uploadImage = async (result) => {
    const formData = new FormData();
    formData.append("file", {
      uri: result.uri,
      name: "image.png",
      type: "image/png",
    });

    const apiUrl = "http://localhost:8000/predict";

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    
      const resultJson = await response.json();
      console.log(resultJson);
    } catch (error) {
      console.error('Error during fetch:', error);
    }
    
  };

  return (
    <>
    <NavBar/>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={{ width: 200, height: 200 }}
        />
      )}
    </>
  );
}

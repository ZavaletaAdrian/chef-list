import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import House from '../assets/svgs/House';
import Search from '../assets/svgs/Search';
import Camera from '../assets/svgs/Camera';
import Profile from '../assets/svgs/Profile';
export default function LowerBar() {
  return (
    <View style={styles.lowerbar}>
        <House />
        <Search />
        <Camera />
        <Profile />
    </View>
  )
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

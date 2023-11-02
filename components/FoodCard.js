import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default function FoodCard({name, image, ingredients, cookingTime}) {
  return (
    <View styles={styles.container}>
        <Image source={"https://github.com/KarloPry/chef-list/blob/dev-karlo/assets/images/comida/uovo-preparato.jpeg"}/>
        <Text>
        {name}
        </Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems:'center'
    }
})
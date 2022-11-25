import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import {colors} from '../theme'
export default function AppButton({label}) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{label}</Text>
    </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    container:{
        height:50,
        backgroundColor: colors.white,
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center"

    }
})
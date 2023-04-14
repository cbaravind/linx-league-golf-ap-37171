import { StyleSheet, Text, View } from "react-native"
import React from "react"
import fonts from "../../themes/fonts"

export default function Signin() {
  return (
    <View>
      <Text
        style={{
          fontFamily: fonts.type.proximaRegular,
          fontSize: fonts.size.font1
        }}
      >
        Signin
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})

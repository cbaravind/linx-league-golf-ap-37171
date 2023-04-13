import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native"
import React from "react"
import { colors, fonts } from "../theme"
import { Button } from "native-base"

export default function AppButton({ label, style, labelStyle, onPress, isLoading, disabled }) {
  return (
    <TouchableOpacity disabled={isLoading || disabled} onPress={onPress} style={[styles.container, style]}>
      {isLoading ?
        <ActivityIndicator color={colors.green} />
        :
        <Text style={[styles.btnLabel, labelStyle]}>{label}</Text>
      }
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 45,
    backgroundColor: colors.green,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  shadow: {
    elevation: 1,
    shadowColor: "rgba(0, 0, 128, 0.5)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 10,
    shadowOpacity: 0.5
  },
  btnLabel: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: fonts.PROXIMA_BOLD
  }
})

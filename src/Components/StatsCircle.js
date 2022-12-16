import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import { colors, fonts } from "../theme"
// import { Icon, IconButton } from 'native-base'
import Ionicons from "react-native-vector-icons/Ionicons"

export default function StatsCircle({
  title,
  value,
  style,
  dark,
  info,
  onPressInfo,
  titleInside
}) {
  return (
    <View style={{ marginHorizontal: 6 }}>
      {info ? (
        <TouchableOpacity onPress={onPressInfo}>
          <Ionicons
            name="information-circle-outline"
            color={colors.green}
            style={{
              alignSelf: "flex-end",
              position: "absolute",
              right: 0,
              top: -11
            }}
            size={17}
          />
        </TouchableOpacity>
      ) : (
        <></>
      )}
      <View
        style={[
          styles.circle,
          { borderColor: dark ? colors.darkGreen : colors.green },
          style
        ]}
      >
        <Text
          style={[
            styles.text,
            { color: dark ? colors.darkGreen : colors.green, fontSize: 18 }
          ]}
        >
          {value}
        </Text>
        {titleInside ? (
          <Text style={[styles.text, { fontSize: 10 }]}>{title}</Text>
        ) : (
          <></>
        )}
      </View>
      {!titleInside ? <Text style={styles.text}>{title}</Text> : <></>}
    </View>
  )
}
const styles = StyleSheet.create({
  circle: {
    width: 55,
    height: 55,
    borderWidth: 2,
    borderColor: colors.green,
    borderRadius: 30,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4
    },
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5
  },
  text: {
    color: colors.text1,
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontFamily: fonts.PROXIMA_REGULAR
  }
})

import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import { colors, fonts } from "../../../theme"
export default function StandingCard({ item, active, rank }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View
        style={[
          styles.header,
          { backgroundColor: active ? colors.green : colors.grey3 }
        ]}
      >
        <Text
          style={[
            styles.title,
            { color: active ? colors.white : colors.text1 }
          ]}
        >
          {item.title}
        </Text>
      </View>
      <View style={styles.main}>
        <View style={{ paddingVertical: 10 }}>
          <Text
            style={[
              styles.h1,
              { color: active ? colors.darkGreen : colors.text1 }
            ]}
          >
            {item.value}
          </Text>
        </View>
        <Text
          style={[
            styles.h1,
            {
              fontWeight: "400",
              fontSize: 14,
              color: active ? colors.green : colors.text1
            }
          ]}
        >
          Ranking: {rank}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    width: 88,
    height: 94,
    // alignItems: "center",
    // justifyContent:"center",
    borderRadius: 8,
    marginRight: 9,
    backgroundColor: colors.white
  },
  header: {
    backgroundColor: colors.grey3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 9,
    alignItems: "center",
    paddingBottom: 2
  },
  title: {
    fontSize: 10,
    fontWeight: "300",
    fontFamily: fonts.PROXIMA_REGULAR,
    color: colors.text1,
    textTransform: "capitalize"
  },
  main: {
    alignItems: "center"
    // paddingTop:10
  },
  h1: {
    fontSize: 20,
    fontFamily: fonts.PROXIMA_REGULAR,
    fontWeight: "600",
    color: colors.text1
  }
})

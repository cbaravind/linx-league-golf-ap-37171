import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native"
import React, { useEffect, useState } from "react"
import AppHeader from "../../Components/AppHeader"
import Icon from "react-native-vector-icons/Ionicons"
import { colors, fonts } from "../../theme"
import ScoreTable from "./components/ScoreTable"
import { Table } from "react-native-table-component"
import Row from "../../Components/Row"
import { shareOptions } from "../../constants"
import Share from 'react-native-share'
export default function ScoreDetailScreen({route}) {
  const {gameId,holes}=route?.params
  const onShare = () => {

    Share.open(shareOptions)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        err && console.log(err);
      })
  }

  return (
    <>
      <AppHeader
        showLogo
        back
        rightIcon={
          <Pressable onPress={onShare}>
            <Icon name="ios-share-social" size={24} color={colors.white} />
          </Pressable>
        }
      />
      <View
        style={{ backgroundColor: colors.background, flex: 1, paddingTop: 30 }}
      >
        <Text style={styles.h1}>Linx League</Text>
        <View style={{ paddingTop: 10, backgroundColor: colors.background }}>
          <Text style={styles.text}>dd/mm/yyyy, 08:00am</Text>
        </View>
        <ScoreTable />
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  h1: {
    color: colors.green,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: fonts.PROXIMA_REGULAR
  },
  text: {
    color: colors.text1,
    fontSize: 14,
    fontFamily: fonts.PROXIMA_REGULAR,
    fontWeight: "400",
    textAlign: "center"
  },
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "green"
    // backgroundColor: '#fff'
  }
})

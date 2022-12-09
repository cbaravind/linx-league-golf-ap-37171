import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppHeader from '../../Components/AppHeader'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors, fonts } from '../../theme'
import ScoreTable from './components/ScoreTable'
import { Table } from 'react-native-table-component'
import Row from '../../Components/Row'

export default function ScoreDetailScreen() {

  return (
    <>
      <AppHeader showLogo
        back rightIcon={<Icon name="ios-share-social" size={24} color={colors.white} />} />
      <View style={{ backgroundColor: colors.background, flex: 1, paddingTop: 30 }} >
        <Text style={styles.h1}>Linx League</Text>
        <View style={{ paddingTop: 10,backgroundColor:colors.background }} >
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
    fontWeight: 'bold',
    textAlign: "center",
    fontFamily: fonts.PROXIMA_REGULAR
  },
  text: {
    color: colors.text1,
    fontSize: 14,
    fontFamily: fonts.PROXIMA_REGULAR,
    fontWeight: '400',
    textAlign: "center",

  },
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: 'green'
    // backgroundColor: '#fff'
  },

})
import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Container from '../../Components/Container'
import AppHeader from '../../Components/AppHeader'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../theme'
import { Center } from 'native-base'
import TopTab from '../../Navigation/TopTab'

export default function ScoreCard() {
  return (
    <>
    {/* // <Center px="1" mt='30' > */}
    {/* // <Container> */}
      <AppHeader showLogo  rightIcon={<Icon name="ios-share-social" size={24} color={colors.white} />} />
       {/* <ScrollView style={{ backgroundColor: colors.background, paddingTop: 20, flex: 1 }} > */}
        <TopTab/>
      {/* </ScrollView> */}
    {/* // </Container> */}
        {/* // </Center> */}
    </>
  )
}
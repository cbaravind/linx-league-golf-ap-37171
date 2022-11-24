import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Container from '../../Components/Container'
import AppHeader from '../../Components/AppHeader'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../../theme'
import { Center } from 'native-base'

export default function ScoreCard() {
  return (
    <Container>
      <AppHeader showLogo title={"ScoreCard"} rightIcon={<Icon name="ios-share-social" size={28} color={colors.white} />} />
       <ScrollView style={{ backgroundColor: colors.background, paddingTop: 20, flex: 1 }} >
        <Center px="1" >

        </Center>
      </ScrollView>
    </Container>
  )
}
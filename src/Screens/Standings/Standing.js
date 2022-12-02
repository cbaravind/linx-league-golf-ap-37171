import { View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { standings, stats } from '../../assets/data'
import StandingCard from './components/StandingCard'
import { Icon, IconButton, Text } from 'native-base'
import { colors, fonts } from '../../theme'
import Row from '../../Components/Row'
import Ionicons from 'react-native-vector-icons/Ionicons'
import RankCard from './components/RankCard'
export default function Standing() {
  const data = [
    { id: 1, city: 'Saint Augustine, FL', rank: 1, color: 'rgba(255, 215, 0, 0.5)' },
    { id: 2, city: 'Saint Augustine, FL', rank: 2, color: 'rgba(190, 190, 190, 0.5)' },
    { id: 3, city: 'LA, California', rank: 3, color: 'rgba(205, 127, 50, 0.5)' },
    { id: 4, city: 'Saint Augustine, FL', rank: 4, color: 'rgba(255, 215, 0, 0.5)' },
    { id: 5, city: 'LA, California', rank: 3, color: 'rgba(205, 127, 50, 0.5)' },
  ]
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Row style={{ justifyContent: 'center', marginBottom: 7 }}>
          <Text textAlign="center" color={colors.green} fontSize={"20"} fontWeight={"700"} fontFamily={fonts.PROXIMA_REGULAR} >Linx League</Text>
          <IconButton ml={-1} mt={1} icon={<Icon as={Ionicons} name={"chevron-down"} size={6} color={colors.green} />} />
        </Row>
        <View>
          <FlatList
            horizontal
            data={standings}
            renderItem={({ item, index }) => <StandingCard item={item} rank={'2nd'} active={index == 0} />}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 12 }}
          />
        </View>

        <Text m={'3'} color={colors.text1} fontSize={"20"} fontWeight={"700"} fontFamily={fonts.PROXIMA_REGULAR} >Linx League Ranking</Text>
        <RankCard item={data[1]} backgroundColor={data[1].color} />
        <View style={{ height: 1, backgroundColor: colors.green, width: '84%', alignSelf: "center", marginVertical: 15 }} />
        <View style={{ marginBottom: 40, flex: 1 }}>
          <FlatList
            data={data}
            renderItem={({ item, index }) => <RankCard item={item} backgroundColor={item.color} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 40, }}
          />
        </View>
      </ScrollView>
    </View>

  )
}
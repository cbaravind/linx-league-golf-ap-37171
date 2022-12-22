import { View, FlatList, ScrollView, StyleSheet } from "react-native"
import React, { useState } from "react"
import { standings, stats } from "../../assets/data"
import StandingCard from "./components/StandingCard"
import { CheckIcon, Icon, IconButton, Select, Text } from "native-base"
import { colors, fonts } from "../../theme"
import Row from "../../Components/Row"
import Ionicons from "react-native-vector-icons/Ionicons"
import RankCard from "./components/RankCard"
export default function Standing() {
  let [league, setLeague] = React.useState('linxleague');
  const [score, setScore] = useState(12)
  const [holes, setHoles] = useState(9)
  const data = [
    {
      id: 1,
      city: "Saint Augustine, FL",
      rank: 1,
      color: "rgba(255, 215, 0, 0.5)"
    },
    {
      id: 2,
      city: "Saint Augustine",
      rank: 2,
      color: "rgba(190, 190, 190, 0.5)"
    },
    {
      id: 3,
      city: "LA, California",
      rank: 3,
      color: "rgba(205, 127, 50, 0.5)"
    },
    {
      id: 4,
      city: "Saint Augustine, FL",
      rank: 4,
      color: "rgba(255, 215, 0, 0.5)"
    },
    { id: 5, city: "LA, California", rank: 3, color: "rgba(205, 127, 50, 0.5)" }
  ]
  const scoreData = [
    { label: '10 score', value: 10 },
    { label: '12 score', value: 12 },
    { label: '15 score', value: 15 },
  ]
  const holesData = [
    { label: '9 Holes', value: 9 },
    { label: '18 Holes', value: 18 },
  ]
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ alignItems: "center", paddingBottom: 15 }}>
          <Select
            selectedValue={league} minWidth={150}
            onValueChange={itemValue => setLeague(itemValue)}
            _selectedItem={{
              bg: colors.white,
              endIcon: <CheckIcon size={4} />
            }}>
            <Select.Item label="Linx League" value="linxleague" />
            <Select.Item label="League" value="League" />
            <Select.Item label="League 1" value="League1" />

          </Select>
        </View>

        <View>
          <FlatList
            horizontal
            data={standings}
            renderItem={({ item, index }) => (
              <StandingCard item={item} rank={"2nd"} active={index == 0} />
            )}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 12 }}
          />
        </View>
        <Row style={{padding:20}} >
          <View style={styles.picker}>
            <Select
              selectedValue={score}
              minWidth={150}
              style={styles.text}
              onValueChange={itemValue => setScore(itemValue)}
              _selectedItem={{
                bg: colors.white,
                endIcon: <CheckIcon size={4} />
              }}>
              {scoreData.map((score) => (
                <Select.Item label={score.label} value={score.value} />
              ))}
            </Select>
          </View>
          <View style={styles.picker}>
            <Select
              selectedValue={holes}
              minWidth={150}
              style={styles.text}
              onValueChange={itemValue => setHoles(itemValue)}
              _selectedItem={{
                bg: colors.white,
                endIcon: <CheckIcon size={4} />
              }}>
              {holesData.map((hole) => (
                <Select.Item label={hole.label} value={hole.value} />
              ))}
            </Select>
          </View>
        </Row>

        <Text
          m={"3"}
          color={colors.text1}
          fontSize={"20"}
          fontWeight={"700"}
          fontFamily={fonts.PROXIMA_REGULAR}
        >
          Linx League Ranking
        </Text>
        <RankCard item={data[1]} backgroundColor={data[1].color} />
        <View
          style={{
            height: 1,
            backgroundColor: colors.green,
            width: "84%",
            alignSelf: "center",
            marginVertical: 15
          }}
        />
        <View style={{ marginBottom: 40, flex: 1 }}>
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <RankCard item={item} backgroundColor={item.color} />
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={{ paddingBottom: 40 }}
          />
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  picker: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.grey4,
    flex:1,
    marginHorizontal:5
  },
  text:{ color: colors.text1,fontWeight:'400',fontSize:17 }
})

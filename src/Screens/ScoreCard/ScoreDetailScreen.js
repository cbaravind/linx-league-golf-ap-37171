import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native"
import React, { useEffect, useState } from "react"
import AppHeader from "../../Components/AppHeader"
import Icon from "react-native-vector-icons/Ionicons"
import { colors, fonts } from "../../theme"
import ScoreTable from "./components/ScoreTable"
import { Table } from "react-native-table-component"
import Row from "../../Components/Row"
import { shareOptions } from "../../constants"
import Share from "react-native-share"
import { getGameScore } from "../../../api"
import { useSelector } from "react-redux"
import MyScoreTable from "./components/MyScoreTable"
import ProfileImage from "../../Components/ProfileImage"

export default function ScoreDetailScreen({ route }) {
  const { gameId, holes, roundDate, roundTime, leagueName, players } =
    route?.params
  const { token, user } = useSelector(state => state.auth?.user)
  const [gameScores, setGameScores] = useState(false)
  const onShare = () => {
    Share.open(shareOptions)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        err && console.log(err)
      })
  }
  useEffect(() => {
    scoreHandler()
  }, [])
  const scoreHandler = async () => {
    const response = await getGameScore(gameId, token)
    console.log(response, "response of gameee")
    const res = JSON.parse(response)
    if (res.results?.length) {
      setGameScores(res.results)
    }
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
        <Text style={styles.h1}>{leagueName}</Text>
        <View style={{ paddingTop: 10, backgroundColor: colors.background }}>
          <Text style={styles.text}>
            {roundDate}, {roundTime}
          </Text>
        </View>
        <ScoreTable />
        <MyScoreTable scores={gameScores} />
        <View style={styles.divider} />
        <View style={styles.card}>
          {players?.map(
            player =>
              player.user?.id != user?.user.id && (
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                >
                  <View style={styles.row}>
                    <View style={[styles.cell, { width: 70 }]}>
                      <ProfileImage
                        imgStyle={{ borderRadius: 30 }}
                        image={{ uri: player?.profile_image }}
                        width={30}
                        height={30}
                      />
                      <Text
                        adjustsFontSizeToFit
                        numberOfLines={1}
                        style={styles.text}
                      >
                        {player?.user?.name || player?.user?.first_name}
                      </Text>
                    </View>
                    {gameScores ? (
                      gameScores?.map(
                        item =>
                          item.user == player?.user?.id && (
                            <View style={styles.cell}>
                              <Text style={styles.text}>{item.score}</Text>
                            </View>
                          )
                      )
                    ) : (
                      <></>
                    )}
                  </View>
                </ScrollView>
              )
          )}
        </View>
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

  divider: {
    height: 1,
    width: "88%",
    backgroundColor: colors.green,
    alignSelf: "center",
    marginVertical: 5
  },
  card: {
    backgroundColor: colors.white,
    margin: 15,
    borderRadius: 15,
    paddingVertical: 15
  },
  row: {
    height: 54,
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 6,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  title: { flex: 1 },

  cell: {
    alignItems: "center",
    justifyContent: "center",
    width: 45
    // paddingHorizontal: 17,
    // paddingVertical: 15
  },
  text: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: 16,
    color: colors.text1,
    fontFamily: fonts.PROXIMA_REGULAR
  }
})

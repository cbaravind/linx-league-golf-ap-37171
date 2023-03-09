import { View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator } from "react-native"
import React, { useEffect, useState } from "react"
import AppHeader from "../../Components/AppHeader"
import Icon from "react-native-vector-icons/Ionicons"
import { colors, fonts } from "../../theme"
import ScoreTable from "./components/ScoreTable"
import { Table } from "react-native-table-component"
import Row from "../../Components/Row"
import { shareOptions } from "../../constants"
import Share from "react-native-share"
import { getGameDetails, getGameScore, updateGame } from "../../../api"
import { useSelector } from "react-redux"
import MyScoreTable from "./components/MyScoreTable"
import ProfileImage from "../../Components/ProfileImage"
import { Button } from "native-base"
import AppModal from "../../Components/AppModal"
import { useNavigation } from "@react-navigation/core"
import RoutesKey from "../../Navigation/routesKey"

export default function ScoreDetailScreen({ route }) {
  const { gameId, holes, roundDate, roundTime, leagueName, players } =
    route?.params
  const { token, user } = useSelector(state => state.auth?.user)
  const navigation = useNavigation()
  const [gameScores, setGameScores] = useState(false)
  const [btnLoading, setBtnLoading] = useState(false)
  const [completedPlayers, setCompletedPlayers] = useState(false)
  const [roundFinished, setRoundFinished] = useState(false)
  const [scoresSubmitted, setScoresSubmitted] = useState(false)
  const [gameScoreData, setGameScoreData] = useState(false)
  const [loading, setLoading] = useState(false)
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
    setLoading(true)
    scoreHandler()

  }, [])
  const scoreHandler = async () => {
    const response = await getGameScore(gameId, token)
    const details = await getGameDetails(token, gameId)
    const res = JSON.parse(response)
    const game = JSON.parse(details)
    if (res.results?.length) {
      setGameScores(res.results)
    }
    setGameScoreData(game.score_data)
    
    let completed = []
    if (game.score_data) {
      Object.values(game.score_data).map(obj => {
        let parsedObject = JSON.parse(obj)
        parsedObject.status === 'completed' ?
          (parsedObject.playerId == user?.user?.id ? setScoresSubmitted(true) : null,
            completed.push(parsedObject)) : null
      })
    }
    setLoading(false)
    setCompletedPlayers(completed)
  }
  const submitScore = async () => {
    setBtnLoading(true)

    const player = { playerId: user?.user?.id, status: 'completed' }
    const obj = {
      round_date: roundDate,
      round_time: roundTime,
      golf_course: 1,
      season: 1,
      status: players.length == completedPlayers?.length + 1 ? "completed" : "playing",
      score_data: {
        ...gameScoreData,
        [user?.user?.id] : JSON.stringify(player)
      },

    }
    const response = await updateGame(obj, token, gameId)
    const res = JSON.parse(response)
    setBtnLoading(false)
    setRoundFinished(true)
  }

  return (
    <View style={{ flex: 1, paddingBottom: 60 }}>
      <AppHeader
        showLogo
        back
        rightIcon={
          <Pressable onPress={onShare}>
            <Icon name="ios-share-social" size={24} color={colors.white} />
          </Pressable>
        }
      />
      {loading ?
        <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
          <ActivityIndicator color={colors.green} />
        </View>
        :
        <>
          <ScrollView
            contentContainerStyle={{ backgroundColor: colors.background, paddingVertical: 30 }}
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
            {players?.map(
              player =>
                player.user?.id != user?.user.id && (
                  <View style={styles.card}>
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
                  </View>
                )

            )}
          </ScrollView>
          <View style={styles.button}>
            <Button
              // style={{ alignSelf: "center" }}
              isDisabled={btnLoading || scoresSubmitted}
              isLoading={btnLoading}
              width={"60%"}
              onPress={submitScore}
            >
              {scoresSubmitted ? "SUBMITTED" : "SUBMIT SCORECARD"}
            </Button>
          </View>
        </>
      }

      {roundFinished ? (
        <AppModal
          heading="Round is finished"
          onClose={() => { setRoundFinished(false); navigation.navigate(RoutesKey.SCORECARD) }}
          button
          onPress={() => { setRoundFinished(false); navigation.navigate(RoutesKey.SCORECARD) }}
        />
      ) : (
        <></>
      )}
    </View>
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
    marginHorizontal: 15,
    borderRadius: 15,
    padding: 15,
    marginTop: 10
  },
  row: {
    height: 54,
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 6,
    alignItems: "center",
    justifyContent: "flex-start",

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
  },
  button: {
    backgroundColor: colors.background,
    // paddingHorizontal: 20,
    paddingVertical: 10,
    // paddingTop:5,
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",

  },
})

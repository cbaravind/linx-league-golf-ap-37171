import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from "react-native"
import React, { useEffect, useState } from "react"
import { colors, fonts } from "../../../theme"
import { Box, Text, Avatar, Image, Button } from "native-base"
import Row from "../../../Components/Row"
import Counter from "../../../Components/Counter"
import { useSelector } from "react-redux"
import { postGameScore } from "../../../../api"
import ScoreCounter from "./ScoreCounter"

const ScoreTracker = ({ players, gameId, hole }) => {
  const { token, user } = useSelector(state => state.auth?.user)
  const [scores, setScores] = useState([])
  const [btnLoading, setBtnLoading] = useState(false)
  const [scoreUpdated, setScoreUpdated] = useState(false)

  const gameScore = async () => {
    setBtnLoading(true)

    let data = []
    scores.map(async i => {
      let obj = {
        score: i.score,
        // putt: putts,
        game: gameId,
        user: i.user,
        hole: hole
      }
      data.push(obj)
    })
    const response = await postGameScore(
      { data: data },
      token,
      scoreUpdated ? "PUT" : "POST",
      gameId
    )
    const res = JSON.parse(response)
    console.log(res)
    setBtnLoading(false)
  }
  return (
    <View style={styles.container}>
      {players.length > 1 && (
        <View>
          <View
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              backgroundColor: colors.background,
              padding: 5,
              borderBottomLeftRadius: 10,
              zIndex: 10
            }}
          >
            <Button
              onPress={() => {
                gameScore()
                // addScoreClicked
                //   ? setAddScoreClicked(false)
                //   : setAddScoreClicked(true)
              }}
              style={{
                backgroundColor: colors.darkGreen,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                height: 68,
                width: 78
              }}
              colorScheme="green"
            >
              {btnLoading ? (
                <ActivityIndicator />
              ) : (
                <Text
                  textAlign="center"
                  fontSize={16}
                  fontWeight={"700"}
                  color={colors.white}
                >
                  {"Enter"}
                </Text>
              )}
            </Button>
          </View>

          <Box borderRadius={10} zIndex={0} pb={"3"}>
            <Box pl={"5"} flexDirection="row">
              <Text
                fontWeight="700"
                fontSize="16"
                textAlign={"center"}
                mt="6"
                mb="2"
              >
                Scoretracker
              </Text>
              {/* <Avatar source={item.image} /> */}
            </Box>
            <Box p="2" mt="4" ml="2">
              {players?.map(
                item =>
                  item.id != user?.id && (
                    <Box style={styles.row} flexDirection="row">
                      <Box flexDirection="row">
                        <Avatar source={{ uri: item.image }} />
                        <Text
                          fontWeight="700"
                          fontSize="16"
                          textAlign={"center"}
                          mt="3"
                          ml={"2"}
                          // mb="2"
                        >
                          {item?.user?.name || item?.first_name}
                        </Text>
                      </Box>
                      <ScoreCounter
                        scores={scores}
                        setScores={setScores}
                        hole={hole}
                        gameId={gameId}
                        item={item}
                      />
                    </Box>
                  )
              )}
            </Box>
          </Box>
        </View>
      )}
    </View>
  )
}
export default ScoreTracker
const styles = StyleSheet.create({
  container: {
    shadowColor: "rgba(125, 158, 73, 0.15)",
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4
    },
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginBottom: 10
  },
  box: {
    borderWidth: 5,
    borderColor: colors.background,
    borderRadius: 10,
    width: "45%",
    // alignItems:"center",
    justifyContent: "center"
  },
  text: {
    fontFamily: fonts.PROXIMA_REGULAR,
    fontSize: 10,
    fontWeight: "400",
    color: colors.text1,
    textAlign: "center"
  },
  chartText: bool => ({
    fontFamily: fonts.PROXIMA_REGULAR,
    fontSize: 8,
    fontWeight: "400",
    color: colors.text1,
    textAlign: "center",
    transform: [{ rotate: bool ? "180deg" : "0deg" }],
    marginVertical: -6
  }),
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingVertical: 7
  },
  horizontalImg: {
    height: 52,
    width: 26,
    right: -11,
    alignItems: "center",
    justifyContent: "center"
    //   marginTop: -27, marginLeft: -28,
  },
  verticalImg: {
    height: 26,
    width: 52,
    marginRight: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  circle: {
    zIndex: 1,
    backgroundColor: "#7D9E49",
    height: 45,
    width: 45,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  smallText: {
    fontSize: 5,
    color: colors.text1,
    fontFamily: fonts.PROXIMA_REGULAR,
    textAlign: "center",
    fontWeight: "400",
    lineHeight: 5.5
  }
})

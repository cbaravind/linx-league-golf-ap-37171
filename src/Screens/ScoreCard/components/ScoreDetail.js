import { View, ImageBackground, StyleSheet } from "react-native"
import React, { useState } from "react"
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { colors, fonts } from "../../../theme"
import {
  Box,
  Text,
  Avatar,
  Image,
  Button
} from "native-base"
import Row from "../../../Components/Row"
import Counter from "../../../Components/Counter"
export default function ScoreDetail({ item }) {
  const [addScoreClicked, setAddScoreClicked] = useState(false)
  const [putts, setPutts] = useState(0)
  const [score, setScore] = useState(1)
  return (
    <View style={styles.container}>
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
          onPress={() => { addScoreClicked ? setAddScoreClicked(false) : setAddScoreClicked(true) }}
          style={{
            backgroundColor: addScoreClicked ? colors.darkGreen : colors.green,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            height: 68,
            width: 78
          }}
          colorScheme="green"

        >
          <Text
            textAlign="center"
            fontSize={16}
            fontWeight={"700"}
            color={colors.white}
          >
            {addScoreClicked ?
              'Enter' :
              'ADD Score'
            }
          </Text>
        </Button>
      </View>
      <Box p="2" borderRadius={10} mt="4" zIndex={0} pb={"5"}>
        <Box flexDirection="row">
          <Avatar source={item.image} />
          <Box ml="2">
            <Text fontWeight="700" fontSize="16" color={colors.text1}>
              {item.user?.name}
            </Text>
            <Box flexDirection="row">
              <Image
                mr="1"
                mt="1.5"
                h="2.5"
                w="17%"
                source={require("../../../assets/images/lineVector.png")}
                alt="image"
              />
              <Text fontSize="14">23(+7)</Text>
            </Box>
          </Box>
          <Text fontSize="14" mt="0.5" ml="20%">
            [21]
          </Text>
        </Box>
        {!addScoreClicked ?
          <Text fontWeight="700" fontSize="16" textAlign={"center"} mt="6" mb="2">
            Hole Stats History
          </Text>
          :
          <View style={{ height: 30 }} />
        }
        <Box style={styles.row}>
          {addScoreClicked ?
            <Box style={styles.box} h="100%">
              <Text fontWeight="400" fontSize="10" textAlign={"center"} mt="2" mb="2">
                Scoretracker
              </Text>
              <Row >
                <View style={{ alignItems: "center" }}>
                  <Text style={styles.text}>Score</Text>
                  <Counter value={score} setValue={setScore} />
                </View>
                <View style={{ alignItems: "center" }}>
                  <Text style={styles.text}>Putts</Text>
                  <Counter value={putts} setValue={setPutts} />
                </View>
              </Row>

            </Box>
            :
            <Box style={styles.box} h="100%">
              <Box bg="#7D9E4950" pl="1" pr="5">
                <Row>
                  <Text style={styles.text}>Recorded Plays </Text>
                  <Text style={styles.text}> 4</Text>
                </Row>
              </Box>
              <Box pl="1" pr="5">
                <Row>
                  <Text style={styles.text}>Av. Score</Text>
                  <Text style={styles.text}>3.4</Text>
                </Row>
              </Box>
              <Box bg="#7D9E4950" pl="1" pr="5">
                <Row>
                  <Text style={styles.text}>Av. Putts </Text>
                  <Text style={styles.text}>1.2</Text>
                </Row>
              </Box>
              <Box pl="1" pr="5">
                <Row>
                  <Text style={styles.text}>FIR% </Text>
                  <Text style={styles.text}>-</Text>
                </Row>
              </Box>
            </Box>


          }
          <Box
            style={[styles.box]}
            // alignSelf='center'
            px="7"
            py={2}
            ml="auto"
          >
            <Text style={[styles.text, { fontSize: 12, }]}>Tee Accuracy</Text>
            <Image source={require('../../../assets/images/chart.png')} style={{ width: 80, height: 80 }} />

            {/*   <Box alignSelf="center" ml="1" pt="5" pr="-10">
              <ImageBackground
                style={[styles.verticalImg, { top: 2, right: -21 }]}
                source={require("../../../assets/images/topChart.png")}
              >
                <Box pb={"1"}>
                  <Text style={styles.smallText}>Over</Text>
                  <Text style={styles.smallText}>-</Text>
                </Box>
              </ImageBackground>
              <Row style={{ marginTop: -10, justifyContent: "center" }}>
                <ImageBackground
                  style={styles.horizontalImg}
                  source={require("../../../assets/images/leftChart.png")}
                >
                  <Box pr={"2"}>
                    <Text style={styles.smallText}>Left</Text>
                    <Text style={styles.smallText}>-</Text>
                  </Box>
                </ImageBackground>
                <Box style={styles.circle}>
                  <Text style={[styles.smallText, { color: colors.white }]}>
                    Hit
                  </Text>
                  <Text style={[styles.smallText, { color: colors.white }]}>
                    -
                  </Text>
                </Box>
                <ImageBackground
                  style={[styles.horizontalImg, { left: -5 }]}
                  source={require("../../../assets/images/rightChart.png")}
                >
                  <Box pl={"2"}>
                    <Text style={styles.smallText}>Right</Text>
                    <Text style={styles.smallText}>-</Text>
                  </Box>
                </ImageBackground>
              </Row>
              <ImageBackground
                style={[
                  styles.verticalImg,
                  {
                    position: "absolute",
                    bottom: -14,
                    right: 11,
                    zIndex: -1
                  }
                ]}
                source={require("../../../assets/images/bottomChart.png")}
              >
                <Box pt="2">
                  <Text style={styles.smallText}>Short</Text>
                  <Text style={styles.smallText}>-</Text>
                </Box>
              </ImageBackground>
            </Box> */}
          </Box>
        </Box>
      </Box>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    shadowColor: 'rgba(125, 158, 73, 0.15)',
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4
    },
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginBottom: 10
  },
  box: {
    borderWidth: 1,
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
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20
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

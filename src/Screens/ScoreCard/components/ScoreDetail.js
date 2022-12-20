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
  const [addScoreClicked, setAddStoreClicked] = useState(false)
  return (
    <View>
      <View
        style={{
          position: "absolute",
          top: 10,
          right: 0,
          backgroundColor: colors.background,
          padding: 5,
          borderBottomLeftRadius: 10,
          zIndex: 10
        }}
      >
        <Button
          onPress={() => setAddStoreClicked(true)}
          style={{
            alignContent: "center",
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
          }}
          colorScheme="green"
          w="20"
        >
          <Text
            textAlign="center"
            fontSize={16}
            fontWeight={"700"}
            color={colors.white}
          >
            ADD Score
          </Text>
        </Button>
      </View>
      <Box bg="white" p="2" borderRadius={10} mt="4" zIndex={0} pb={"5"}>
        <Box flexDirection="row">
          <Avatar source={require("../../../assets/images/profileImg.png")} />
          <Box ml="2">
            <Text fontWeight="700" fontSize="16">
              Dylan Thomas
            </Text>
            <Box flexDirection="row">
              <Image
                mr="1"
                mt="1.5"
                h="2.5"
                w="17%"
                source={require("../../../assets/images/lineVector.png")}
                alt=""
              />
              <Text fontSize="14">23(+7)</Text>
            </Box>
          </Box>
          <Text fontSize="14" mt="0.5" ml="20%">
            [21]
          </Text>
        </Box>
        <Text fontWeight="700" fontSize="16" textAlign={"center"} mt="6" mb="2">
          Hole Stats History
        </Text>
        <Box style={styles.row}>
          {addScoreClicked ?
            <Box style={styles.box} h="80%">
              <Row style={{ justifyContent: 'center' }}>
                <View style={{alignItems:"center"}}>
                  <Text>Score</Text>
                  <Counter />
                </View>
                <View style={{alignItems:"center"}}>
                  <Text>Putts</Text>
                  <Counter />
                </View>
              </Row>

            </Box>
            :
            <Box style={styles.box} h="80%">
              <Box bg="#7D9E4950" pl="5" pr="5" pt="1" pb="1">
                <Row>
                  <Text style={styles.text}>Recorded Plays </Text>
                  <Text style={styles.text}> 4</Text>
                </Row>
              </Box>
              <Box pl="5" pr="5" pt="1" pb="1">
                <Row>
                  <Text style={styles.text}>Av. Score</Text>
                  <Text style={styles.text}>3.4</Text>
                </Row>
              </Box>
              <Box bg="#7D9E4950" pl="5" pr="5" pt="1" pb="1">
                <Row>
                  <Text style={styles.text}>Av. Putts </Text>
                  <Text style={styles.text}>1.2</Text>
                </Row>
              </Box>
              <Box pl="5" pr="5" pt="1" pb="1">
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
            p="7"
            ml="auto"
          >
            <Text style={[styles.text, { fontSize: 12, }]}>Tee Accuracy</Text>
            <Box alignSelf="center" ml="1" pr="-10">
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
            </Box>
          </Box>
        </Box>
      </Box>
    </View>
  )
}
const styles = StyleSheet.create({
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
    fontSize: 14,
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

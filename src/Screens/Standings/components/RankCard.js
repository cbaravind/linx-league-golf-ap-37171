import { View, Text, StyleSheet, Image } from "react-native"
import React from "react"
import Row from "../../../Components/Row"
import { colors, fonts } from "../../../theme"
import StatsCircle from "../../../Components/StatsCircle"
import ProfileImage from "../../../Components/ProfileImage"
export default function RankCard({
  item,
  backgroundColor = "rgba(192,192,192,0.5)"
}) {
  return (
    <View style={styles.container}>
      <Row>
        <Row style={{ justifyContent: "flex-start" }}>
          <View
            style={[
              styles.numberContainer,
              { backgroundColor: backgroundColor, marginRight: 7 }
            ]}
          >
            <View
              style={[
                styles.numberContainer,
                {
                  backgroundColor: backgroundColor,
                  height: 22,
                  width: 22,
                  opacity: 1
                }
              ]}
            >
              <Text style={[styles.text, { color: colors.white }]}>
                {item.id}
              </Text>
            </View>
          </View>
          <ProfileImage
            height={40}
            width={40}
            image={require("../../../assets/images/profileImg.png")}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={[styles.text, { fontWeight: "700", fontSize: 16 }]}>
              {"Dylan Thomas"}
            </Text>
            <Text style={styles.text}>Handicap: 2-4</Text>
            <Text style={styles.text}>{item.city}</Text>
          </View>
        </Row>
        <StatsCircle title={"Estimate"} value={"2-4"} titleInside dark />
      </Row>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 15
    // paddingBottom:20,
    // marginTop:5
  },
  numberContainer: {
    // backgroundColor: 'rgba(192,192,192,0.5)',
    height: 32,
    width: 32,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 14,
    color: colors.text1,
    fontFamily: fonts.PROXIMA_REGULAR
  },
  imgStyle: {
    width: 25,
    height: 25,
    borderRadius: 15
  }
})

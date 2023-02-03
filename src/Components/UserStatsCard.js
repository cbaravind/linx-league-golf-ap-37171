import { View, Text, Image, StyleSheet } from "react-native"
import React, { useState } from "react"
import { colors } from "../theme"
import StatsCircle from "./StatsCircle"
import Row from "./Row"
import LinearGradient from "react-native-linear-gradient"
import AppModal from "./AppModal"

export default function UserStatsCard({ image, name, city, stats }) {
  console.log(image, "image")
  const [infoModalVisible, setInfoModalVisible] = useState(false)

  return (
    <View>
      <View style={styles.linearGradient}>
        {/* <LinearGradient
        colors={["#225529", "#7D9E49"]}
        style={styles.linearGradient}
      > */}
        <Image
          source={{ uri: image }}
          resizeMode="cover"
          style={styles.image}
        />
        {/* </LinearGradient> */}
      </View>
      <View style={styles.card}>
        <Text style={[styles.text, { fontWeight: "700", fontSize: 20 }]}>
          {name}
        </Text>
        <Text style={styles.text}>{city}</Text>
        <Row style={{ paddingTop: 20, justifyContent: "center" }}>
          {stats.map((item, index) => (
            <StatsCircle
              title={item.title}
              value={item.value}
              dark={index % 2 == 0 ? true : false}
              info={
                index == 4
                  ? `When you refer 3 friends who join Linx
                 League, you get a season free!`
                  : index == 1
                  ? "This is the percentage of rounds you have played that a fellow Linx League member has confirmed your score."
                  : false
              }
              // onPressInfo={() =>{index == 4 ?  setInfoModalVisible(4) : index == 1 ? setInfoModalVisible(1) : null}}
            />
          ))}
          {/* <StatsCircle title={'Attested'} value={stats.attested} />
                    <StatsCircle title={'League'} value={stats.league} dark />
                    <StatsCircle title={'Ranking'} value={stats.ranking} />
                    <StatsCircle title={'Referrals'} value={stats.referrals} dark info onPressInfo={() => setInfoModalVisible(true)} /> */}
        </Row>
      </View>
      {infoModalVisible ? (
        <AppModal
          desc={
            infoModalVisible == 4
              ? `When you refer 3 friends who join Linx
               League, you get a season free!`
              : "This is the percentage of rounds you have played that a fellow Linx League member has confirmed your score."
          }
          onClose={() => setInfoModalVisible(false)}
        />
      ) : (
        <></>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  linearGradient: {
    height: 80,
    width: 80,
    borderRadius: 75,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    // marginRight: 10
    position: "absolute",
    top: -30,
    zIndex: 10
  },
  image: {
    width: 74,
    height: 74,
    borderRadius: 45
  },
  card: {
    backgroundColor: colors.white,
    paddingTop: 45,
    marginTop: 15,
    paddingBottom: 20,
    shadowColor: "rgba(125, 158, 73, 0.15)",
    shadowOffset: {
      width: 0,
      height: 4
    },
    borderRadius: 8,
    shadowOpacity: 0.15
    // marginHorizontal:15
  },
  text: {
    color: colors.text1,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400"
  }
  // statsBox
})

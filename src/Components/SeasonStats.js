import { View, Text, StyleSheet } from "react-native"
import React, { useState } from "react"
import { globalStyles } from "../theme"
import Row from "./Row"
import StatsCircle from "./StatsCircle"
import { Icon, IconButton } from "native-base"
import Ionicons from "react-native-vector-icons/Ionicons"
import { colors } from "../theme"
import AppModal from "./AppModal"
import { Tooltip } from "react-native-elements"

export default function SeasonStats() {
  const [infoModalVisible, setInfoModalVisible] = useState(false)

  return (
    <View style={[globalStyles.cardStyle]}>
      <Tooltip
        width={350}
        backgroundColor={colors.white}
        placement={'bottom'}
        height={100}
        overlayColor={'transparent'}
        popover={<Text>Stats are per 9 hole round.</Text>}
      // withPointer={false}

      >
        <Ionicons
          name="information-circle-outline"
          color={colors.green}
          style={{
            alignSelf: "flex-end",
            // position: "absolute",
            right: 4,
            top: 5
          }}
          size={17}
        />
      </Tooltip>
      {/* <IconButton
      onPress={() => setInfoModalVisible(true)}
        style={{ alignSelf: "flex-end" }}
        icon={
          <Icon
            as={Ionicons}
            name="information-circle-outline"
            color={colors.green}
            size={5}
          />
        }
      /> */}
      <View style={styles.card}>
        <Row>
          <View>
            <Text style={styles.text}>20/02/2023</Text>
            <View style={{ height: 4 }} />
            <Text style={styles.h2}>Arizona Tier 3</Text>
            <Text style={styles.h1}>Season Stats</Text>
          </View>
          <StatsCircle title={"Rounds"} dark value={"3/6"} />
        </Row>
        <View style={styles.border} />
        <Row style={{ justifyContent: "center" }}>
          <StatsCircle title={"Av. Score"} value={41} />
          <StatsCircle
            title={"Av. Putts"}
            dark
            value={15.5}
            style={{ marginHorizontal: 20 }}
          />
          <StatsCircle title={"FIR %"} value={56.4} />
        </Row>
      </View>
      {infoModalVisible ? (
        <AppModal
          desc="Stats are per 9 hole round."
          onClose={() => setInfoModalVisible(false)}
        />
      ) : (
        <></>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 10,
    paddingTop: 10
  },
  border: {
    height: 1,
    width: "100%",
    backgroundColor: colors.green,
    marginTop: 5,
    marginBottom: 17,
    alignSelf: "center"
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.grey4
  },
  h2: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.green
  },
  h1: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.text1
  }
})

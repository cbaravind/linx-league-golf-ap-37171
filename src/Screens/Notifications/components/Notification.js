import { View, Text, Image, StyleSheet } from "react-native"
import React from "react"
import LinearGradient from "react-native-linear-gradient"
import Row from "../../../Components/Row"
import { Icon, IconButton } from "native-base"
import { colors } from "../../../theme"
import Ionicons from "react-native-vector-icons/Ionicons"
export default function Notification({ notification }) {
  return (
    <View
      style={{
        paddingLeft: 8,
        paddingVertical: 30,
        backgroundColor: notification.isRead
          ? colors.background
          : "rgba(125, 158, 73, 0.4)"
      }}
    >
      <View style={{ paddingRight: 14 }}>
        <Text style={[styles.title, { textAlign: "right" }]}>
          {notification.time}
        </Text>
      </View>
      <Row>
        <Row style={{ justifyContent: "flex-start", flex: 1 }}>
          {notification.isRead ? (
            <View style={{ width: 18, height: 18 }} />
          ) : (
            <View style={styles.badge}>
              <View style={styles.innerBadge} />
            </View>
          )}
          <LinearGradient
            colors={["#225529", "#7D9E49"]}
            style={styles.linearGradient}
          >
            <Image
              source={require("../../../assets/images/profileImg.png")}
              style={styles.img}
            />
          </LinearGradient>
          <View style={{ flex: 1 }}>
            <Text numberOfLines={2} ellipsizeMode={"tail"} style={styles.title}>
              {notification.title}
            </Text>
          </View>
        </Row>
        <IconButton
          icon={
            <Icon
              name="ellipsis-vertical-sharp"
              as={Ionicons}
              color={colors.text1}
              size={5}
            />
          }
        />
      </Row>
    </View>
  )
}
const styles = StyleSheet.create({
  linearGradient: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10
  },
  img: {
    height: 34,
    width: 34,
    borderRadius: 20
  },
  title: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.text1
  },
  badge: {
    backgroundColor: "rgba(34, 85, 41, 0.5)",
    width: 16,
    height: 16,
    borderRadius: 10,
    marginRight: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  innerBadge: {
    backgroundColor: colors.darkGreen,
    width: 8,
    height: 8,
    borderRadius: 10
  }
})

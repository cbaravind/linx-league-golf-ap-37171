import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import LinearGradient from "react-native-linear-gradient"
import Row from "../../../Components/Row"
import { Icon, IconButton } from "native-base"
import { colors, fonts } from "../../../theme"
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/core"
import RoutesKey from "../../../Navigation/routesKey"
export default function ChatCard({ chat }) {
  const navigation = useNavigation()
  console.log(chat,'chat')
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(RoutesKey.CHAT, { user: chat?.receiver, apiHit: false })}
      style={{
        paddingLeft: 8,
        paddingVertical: 15,
        backgroundColor: !chat.isRead
          ? colors.background
          : "rgba(125, 158, 73, 0.4)"
      }}
    >
      <View style={{ paddingRight: 14 }}>
        <Text style={[styles.title, { textAlign: "right" }]}>{chat.created_at}</Text>
      </View>
      <Row>
        <Row style={{ justifyContent: "flex-start", flex: 1 }}>
          {!chat.isRead ? (
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
            <Text style={[styles.title, { fontWeight: "700" }]}>
              {chat.meta_data}
            </Text>
            <Text numberOfLines={2} ellipsizeMode={"tail"} style={styles.title}>
              {/* {chat.message} */}
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
    </TouchableOpacity>
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
    color: colors.text1,
    fontFamily: fonts.PROXIMA_REGULAR
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

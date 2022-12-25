import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import { globalStyles } from "../../../theme"
import Row from "../../../Components/Row"
import ProfileImage from "../../../Components/ProfileImage"
import { Icon, IconButton } from "native-base"
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import { colors } from "../../../theme"
import { TextInput } from "react-native"
import ReportModal from "./ReportModal"
import { useNavigation } from "@react-navigation/core"
import RoutesKey from "../../../Navigation/routesKey"

export default function FeedCard({ item }) {
  const [showModal, setShowModal] = useState(false)
const navigation = useNavigation()
  return (
    <View style={[globalStyles.cardStyle, { padding: 10, paddingBottom: 30 }]}>
      <Row>
        <TouchableOpacity onPress={()=>navigation.navigate(RoutesKey.PROFILE,{user:item})} >
          <Row style={{ justifyContent: "flex-start" }}>
            <ProfileImage
              height={30}
              width={30}
              style={{ marginRight: 14 }}
              image={item.image}
            />
            <Text style={[styles.text, { fontWeight: "700", fontSize: 16 }]}>
              {item.name}
            </Text>
          </Row>
        </TouchableOpacity>
        <IconButton
          onPress={() => setShowModal(true)}
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
      <Image
        style={styles.feedImg}
        source={require("../../../assets/images/feed.png")}
      />

      <Text style={styles.text}>
        Started a round at
        <Text style={{ color: colors.green }}> Linx league</Text>
      </Text>

      {/*--- Input ---*/}

      <Row style={{ marginTop: 30 }}>
        <Row style={styles.inputStyles}>
          <TextInput
            placeholder="Add comment"
            placeholderTextColor={colors.grey4}
            style={styles.input}
          />
          <IconButton
            icon={
              <Icon
                name="paperclip"
                as={Feather}
                color={colors.text1}
                size={5}
              />
            }
          />
          <TouchableOpacity style={{ paddingRight: 6, paddingLeft: 10 }}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../../../assets/images/emoji.png")}
            />
          </TouchableOpacity>
        </Row>
        <TouchableOpacity style={{ paddingRight: 6, paddingLeft: 15 }}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../../../assets/images/sendIcon.png")}
          />
        </TouchableOpacity>
      </Row>
      <ReportModal isVisible={showModal} setVisible={setShowModal} />

    </View>
  )
}
const styles = StyleSheet.create({
  feedImg: {
    width: "100%",
    height: 185,
    borderRadius: 8,
    alignSelf: "center",
    marginVertical: 12
  },
  text: { fontSize: 14, color: colors.text1, fontWeight: "400" },
  inputStyles: {
    height: 40,
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    paddingLeft: 10,
    flex: 1
  },
  input: {
    color: colors.text1,
    fontSize: 14,
    fontWeight: "400",
    flex: 1,
    height: "100%"
  }
})

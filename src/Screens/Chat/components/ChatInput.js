import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native"
import React from "react"
import { Icon, IconButton } from "native-base"
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import { colors } from "../../../theme"
import Row from "../../../Components/Row"

export default function ChatInput({ onSend, value, onChangeText }) {
  return (
    <Row>
      <Row style={styles.inputStyles}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder="Message"
          placeholderTextColor={colors.grey4}
          style={styles.input}
        />
        <IconButton
          icon={
            <Icon name="paperclip" as={Feather} color={colors.text1} size={5} />
          }
        />
        <TouchableOpacity style={{ paddingRight: 4, paddingLeft: 10 }}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../../../assets/images/emoji.png")}
          />
        </TouchableOpacity>
      </Row>
      <TouchableOpacity
        onPress={onSend}
        style={{ paddingRight: 6, paddingLeft: 10 }}
      >
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../../../assets/images/sendIcon.png")}
        />
      </TouchableOpacity>
    </Row>
  )
}
const styles = StyleSheet.create({
  inputStyles: {
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 10,
    // borderBottomColor: colors.black,
    // borderBottomWidth: 1,
    // paddingLeft: 10,
    flex: 1,
    paddingHorizontal: 12
  },
  input: {
    color: colors.text1,
    fontSize: 14,
    fontWeight: "400",
    flex: 1,
    height: "100%"
  }
})

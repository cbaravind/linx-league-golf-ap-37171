import { View, Text, TextInput } from "react-native"
import React from "react"
import { StyleSheet } from "react-native"
import { colors, fonts } from "../../../theme"
import Row from "../../../Components/Row"
import Icon from "react-native-vector-icons/Ionicons"
import moment from "moment"

export default function CityInput({date,time}) {
  return (
    <View style={{ padding: 20 }}>
      <Row style={styles.container}>
        <Icon name="location-outline" size={25} color={colors.green} />
        <TextInput
          placeholder={"Course, City"}
          style={styles.input}
          placeholderTextColor={colors.text1}
        />
      </Row>
      <Text style={[styles.text]}>{moment(date).format('DD/MM/YYYY')}, {moment(time).format('HH:mm a')}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.green,
    borderRadius: 8,
    paddingHorizontal: 20,
    justifyContent: "flex-start",
    marginBottom: 8
  },
  input: {
    height: 50,
    color: colors.text2,
    fontSize: 16,
    marginLeft: 7,
    fontFamily: fonts.PROXIMA_REGULAR,
    fontWeight: "400"
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: fonts.PROXIMA_REGULAR,
    color: colors.text1
  }
})

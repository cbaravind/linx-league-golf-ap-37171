import { View, Text, TextInput } from "react-native"
import React, { useEffect } from "react"
import { StyleSheet } from "react-native"
import { colors, fonts } from "../../../theme"
import Row from "../../../Components/Row"
import Icon from "react-native-vector-icons/Ionicons"
import moment from "moment"
import { CheckIcon, Select } from "native-base"
import { useSelector } from "react-redux"
import { leagueGolfCourses } from "../../../../api"

export default function CityInput({ date, time }) {
  const { token } = useSelector(state => state.auth?.user)
  let [golfCourse, setGolfCourse] = React.useState("linxleague")

  // useEffect(() => getGolfCourses(1), [])

  // const getGolfCourses = async id => {
  //   const response = await leagueGolfCourses(id, token)
  //   const res = JSON.parse(response)
  //   console.log("res", res)
  //   if (res?.length) console.log("res", res)
  //   else console.log("failed", res)
  // }

  return (
    <View style={{ padding: 20 }}>
      <Row style={styles.container}>
        {/* <Icon name="location-outline" size={25} color={colors.green} />
        <TextInput
          placeholder={"Course, City"}
          style={styles.input}
          placeholderTextColor={"#828282"}
        /> */}
        <View
          style={{
            alignItems: "center",
            // justifyContent: "center",
            flexDirection: "row",
            paddingVertical: 10,
            width: "100%"
            // backgroundColor: "orange"
          }}
        >
          <Icon name="location-outline" size={25} color={colors.green} />
          <View style={{ width: "100%", paddingRight: 10 }}>
            <Select
              selectedValue={golfCourse}
              minWidth={150}
              style={
                {
                  // display: "flex",
                  // flexDirection: "row",
                  // justifyContent: "space-between",
                  // width: "100%"
                }
              }
              onValueChange={itemValue => setGolfCourse(itemValue)}
              _selectedItem={{
                bg: colors.white,
                endIcon: <CheckIcon size={4} />
              }}
            >
              <Select.Item label="Golf Course 1" value="linxleague" />
              <Select.Item label="Golf Course 2" value="ArizonaC" />
              <Select.Item label="Golf Course 3" value="League1" />
            </Select>
          </View>
        </View>
      </Row>
      <Text style={[styles.text]}>
        {moment(date).format("DD/MM/YYYY")},{" "}
        {moment(time, "YYYYMMDDHHmm").format("hh:mm A")}
      </Text>
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

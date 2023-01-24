import React, { useState } from "react"
import { Button, StyleSheet, TouchableOpacity, View } from "react-native"
import DatePicker from "react-native-date-picker"
import { colors } from "../../../theme"
import CalendarPicker from "react-native-calendar-picker"
import { Image, Text, useNativeBase } from "native-base"
import Row from "../../../Components/Row"
import Icon from "react-native-vector-icons/Ionicons"
import Modal from "react-native-modal"
import CommunityIcon from "react-native-vector-icons/MaterialCommunityIcons"
import { useNavigation } from "@react-navigation/core"
import RoutesKey from "../../../Navigation/routesKey"
const DateTimePicker= ({dateTimeSelected,setDateTimeSelected}) => {
  const navigation = useNavigation()
  const [date, setDate] = useState(new Date())
  const [calendarVisible, setCalendarVisible] = useState(false)
  const [timePickerOpen, setTimePickerOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState("")
  const minDate = new Date() // Today
  const maxDate = new Date(2023, 6, 3)
  const onDateChange = (date, type) => {
    console.log(date, "date changed")
    setSelectedDate(date)
    setCalendarVisible(false)
    setTimeout(() => {
      setTimePickerOpen(true)
    }, 500)
  }

  return (
    <>
      <View style={styles.container}>
        <Row>
          <TouchableOpacity
            onPress={() => {
              dateTimeSelected
                ? setDateTimeSelected(false)
                : setCalendarVisible(true)
            }}
            style={styles.button}
          >
            {dateTimeSelected ? (
              <Text style={styles.h2}>Cancel</Text>
            ) : (
              <Text style={styles.text}>DATE</Text>
            )}
          </TouchableOpacity>
          {!dateTimeSelected ? (
            <Icon
              name={"arrow-forward-outline"}
              size={16}
              style={{ marginHorizontal: 5 }}
              color={colors.text2}
            />
          ) : (
            <View style={{ width: 7 }} />
          )}
          <TouchableOpacity
            onPress={() => {
              dateTimeSelected
                ? navigation.navigate(RoutesKey.ADDFRIENDS,{time:date,date:selectedDate})
                : setTimePickerOpen(true)
            }}
            style={[
              styles.button,
              dateTimeSelected ? { backgroundColor: colors.green } : {}
            ]}
          >
            {dateTimeSelected ? (
              <Text style={[styles.h2, { color: colors.white }]}>Confirm</Text>
            ) : (
              <Row>
                <Text style={styles.text}>TIME</Text>
                <Image
                  alt={""}
                  source={require("../../../assets/images/clock.png")}
                  style={{ width: 15, height: 15 }}
                />
              </Row>
            )}
          </TouchableOpacity>
        </Row>
        <Modal
          onBackdropPress={() => setCalendarVisible(false)}
          isVisible={calendarVisible}
          backdropOpacity={0.7}
          style={styles.modal}
        >
          <CalendarPicker
            // startFromMonday={true}
            // allowRangeSelection={true}
            minDate={minDate}
            maxDate={maxDate}
            selectedStartDate={selectedDate}
            weekdays={["S", "M", "T", "W", "T", "F", "S"]}
            todayBackgroundColor={"#fff"}
            todayTextStyle={{
              color: colors.green
            }}
            headerWrapperStyle={{ height: 0 }}
            dayLabelsWrapper={{
              borderWidth: 0,
              borderColor: "#fff"
            }}
            enableDateChange
            textStyle={{ color: colors.text2 }}
            selectedDayStyle={{ backgroundColor: colors.green, }}
            dayShape={"square"}
            selectedDayTextStyle={{ color: '#FFF' }}
            onDateChange={onDateChange}
          />
        </Modal>
        <DatePicker
          modal
          mode={"time"}
          open={timePickerOpen}
          date={date}
          // textColor={colors.white}
          cancelText={""}
          onConfirm={date => {
            setTimePickerOpen(false)
            setDateTimeSelected(true)
            setDate(date)
          }}
          onCancel={() => {
            setTimePickerOpen(false)
          }}
        />
      </View>
    </>
  )
}
export default DateTimePicker
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 12,
    borderRadius: 25,
    marginTop: 10
    // marginHorizontal:30
  },
  button: {
    backgroundColor: colors.white,
    // paddingVertical:10,
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 25,
    height: 40,
    justifyContent: "center",
    paddingHorizontal: 13,
    flex: 0.5
    // width: '50%'
  },
  text: {
    color: colors.text2,
    fontSize: 14
  },
  h2: {
    color: colors.text2,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center"
  },
  modal: {
    backgroundColor: "white",
    height: "35%",
    alignSelf: "center",
    position: "absolute",
    top: "32%",
    borderRadius: 25,
    width: "93%"
  }
})

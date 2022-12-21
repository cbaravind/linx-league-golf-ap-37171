import { StyleSheet, TouchableOpacity, View } from "react-native"
import React, { useState } from "react"
import { Icon, Input, Text, Box, Modal, Button } from "native-base"
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { Calendar } from "react-native-calendars"
import CalendarPicker from "react-native-calendar-picker"
import {colors} from '../theme'
const DatePicker = props => {
  const [show, setShow] = React.useState(false)
  const [selectedDate, setSelectedDate] = useState("")
  // const [dateTimeSelected, setDateTimeSelected] = useState(false)
  const minDate = new Date() // Today
  const maxDate = new Date(2023, 6, 3)
  const onDateChange = (date, type) => {
    console.log(date, "date changed")
    setSelectedDate(date)
    // setCalendarVisible(false)
    // setTimeout(() => {
    //   setTimePickerOpen(true)
    // }, 500)
  }
  return (
    <View style={props.style}>
      <Text mb="2" mt="2">
        {props.text}
      </Text>
      <TouchableOpacity onPress={() => setShow(!show)}>
        <Box
          flexDirection="row"
          w={props.width}
          borderRadius="10"
          p="3"
          bg="#BDBDBD"
        >
          {props.dateValue == "" ? (
            <Text color="#5C6363">MM/DD/YYYY</Text>
          ) : (
            <Text>{props.dateValue}</Text>
          )}
          <Icon
            color="#225529"
            ml="auto"
            alignSelf="center"
            as={AntDesign}
            name="calendar"
          />
        </Box>
      </TouchableOpacity>
      {show ? (
        <Box borderRadius="15" w="100%" alignSelf="center">
          <Modal isOpen={true}>
            <Modal.Content borderRadius="30" w="95%" justifyContent="center">
              <Modal.Body bg="#fff">
                <Box mt="4">
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
                    // selectedDayColor={colors.white}
                    selectedDayStyle={{ backgroundColor: colors.green }}
                    selectedDayTextColor={"#fff"}
                    dayShape={"square"}
                    // selectedDayTextStyle={{ color: '#FFF' }}
                    onDateChange={onDateChange}
                  />
                  {/* <Calendar
                    onMonthChange={props?.onMonthChange}
                    markedDates={props?.markedDates}
                    onDayPress={props?.onDayPress}
                  /> */}
                </Box>
                <Button
                  // style={styles.btn}
                  // variant="ghost"
                  onPress={() => setShow(false)}
                >
                  Confirm
                </Button>
              </Modal.Body>
            </Modal.Content>
          </Modal>
        </Box>
      ) : null}
    </View>
  )
}

export default DatePicker

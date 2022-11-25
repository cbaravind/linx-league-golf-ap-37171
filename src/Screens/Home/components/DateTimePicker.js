import React, { useState } from 'react'
import { Button, StyleSheet, TouchableOpacity, View } from 'react-native'
import DatePicker from 'react-native-date-picker'
import { colors } from '../../../theme'
import CalendarPicker from 'react-native-calendar-picker';
import { Image, Modal, Text } from 'native-base';
import Row from '../../../Components/Row'
import Icon from 'react-native-vector-icons/Ionicons';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
export default () => {
    const [date, setDate] = useState(new Date())
    const [calendarVisible, setCalendarVisible] = useState(false)
    const [timePickerOpen, setTimePickerOpen] = useState(false)
    const [selectedDate, setselectedDate] = useState(false)
    const minDate = new Date(); // Today
    const maxDate = new Date(2017, 6, 3);
const onDateChange=(date)=>{
    setselectedDate(date)
}
    return (
        <>
            <View style={styles.container}>
                <Row>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>MM.DD.YY</Text>
                    </TouchableOpacity>
                    <Icon name={'arrow-forward-outline'} size={16} style={{ marginHorizontal: 5 }} color={colors.text2} />
                    <TouchableOpacity onPress={()=>setTimePickerOpen(true)} style={styles.button}>
                        <Row>
                            <Text style={styles.text}>HH:MM:SS</Text>
                            <Image alt={""} source={require('../../../assets/images/clock.png')} style={{width:15,height:15}} />
                        </Row>
                    </TouchableOpacity>
                </Row>
                <Modal isOpen={calendarVisible} style={{ backgroundColor: 'white', height: '40%', alignSelf: 'center',position:'absolute',bottom:0 }} >
                    <CalendarPicker
                        startFromMonday={true}
                        allowRangeSelection={true}
                        minDate={minDate}
                        maxDate={maxDate}
                        
                        todayBackgroundColor="#f2e6ff"
                        selectedDayColor="#7300e6"
                        selectedDayTextColor="#FFFFFF"
                    onDateChange={onDateChange}
                    />
                </Modal>
                <DatePicker
                    modal
                    mode={'time'}
                    open={timePickerOpen}
                    date={date}
                    // textColor={colors.white}
                    onConfirm={(date) => {
                        setTimePickerOpen(false)
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
        width: '46%'
    },
    text:{
        color:colors.text2,
        fontSize:14
    }
})
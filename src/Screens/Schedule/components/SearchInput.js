import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../../theme'
import Row from '../../../Components/Row'
import Icon from 'react-native-vector-icons/Ionicons'

export default function SearchInput() {
    return (
        <View style={{ padding: 20 }}>

            <Row style={styles.container}>
                <Icon name="search" size={20} color={colors.green} />
                <TextInput placeholder={'Add or Invite a friend to play'} style={styles.input} placeholderTextColor={'#828282'} />
                <TouchableOpacity>
                    <Icon name="mic" size={20} color={colors.green} />
                </TouchableOpacity>
            </Row>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.grey3,
        borderWidth: 1,
        borderColor: colors.green,
        borderRadius: 8,
        paddingHorizontal: 9,
        justifyContent: "flex-start",
        marginBottom: 8
    },
    input: {
        height: 38,
        color: colors.text2,
        fontSize: 16,
        marginLeft: 7,
        flex: 1,
        // fontFamily: fonts.PROXIMA_REGULAR,
        fontWeight: "400",

    },
    text: {
        fontSize: 14,
        fontWeight: "400",
        // fontFamily: fonts.PROXIMA_REGULAR,
        color: colors.text1
    }
})
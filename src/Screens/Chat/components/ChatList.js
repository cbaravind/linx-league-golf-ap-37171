import React from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../theme'
import { useSelector } from 'react-redux';
const MessageItem = ({ message }) => {
    
    const { user, token } = useSelector(state => state.auth.user)
    const isSender = message.sender == user?.id

    return (
        <View style={[styles.messageContainer, { backgroundColor: isSender ? colors.green : colors.darkGreen }]}>
            <Text style={styles.text}>{message.description}</Text>
            <Image style={[styles.tail, isSender ? { right: -3 } : { left: -3 }]} source={isSender ? require('../../../assets/images/lightTail.png') : require('../../../assets/images/darkTail.png')} />
        </View>
    )
}
export default function ChatList({ messages }) {
  
    return (
        <FlatList
            data={messages}
            renderItem={({ item }) => <MessageItem message={item} />}
            keyExtractor={(item) => item.id}
        />

    )
}
const styles = StyleSheet.create({
    messageContainer: {
        backgroundColor: colors.darkGreen,
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 20,
        borderRadius: 18
    },
    text: {
        color: colors.white,
        fontSize: 14,
        fontFamily: fonts.PROXIMA_REGULAR,
    },
    tail: {
        width: 16,
        height: 22,
        position: 'absolute',
        bottom: -4,

    }
})
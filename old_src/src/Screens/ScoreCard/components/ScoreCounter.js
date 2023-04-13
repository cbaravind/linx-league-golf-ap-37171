import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon } from 'native-base'
import Entypo from 'react-native-vector-icons/Entypo'
import { colors, fonts } from '../../../theme'
import { postGameScore } from '../../../../api'
import { useSelector } from 'react-redux'
export default function ScoreCounter({ item, gameId, hole, scores, setScores }) {
    const { token, user } = useSelector(state => state.auth?.user)
    const currentScores = scores.filter(i => i.user == item?.user.id)
    const updatedArray=currentScores?.length ? scores.filter((i)=>i.user != item?.user.id):scores
    console.log(scores,'scores')
    const [value, setValue] = useState(currentScores.score || 0)
    // const gameScore = async (sign) => {
    //     setBtnLoading(sign)
    //     // () =>{value? setValue(value + 1):setValue(1)}
    //     if (!value && sign == 'minus') return
    //     const updated = sign == 'plus' ? value + 1 : value - 1
    //     setValue(updated)
    //     setScoreUpdated(true)
    //     const obj = {
    //         score: updated,
    //         // putt: putts,
    //         game: gameId,
    //         user: item?.user?.id,
    //         hole: hole
    //     }
    //     const response = await postGameScore(obj, token, scoreUpdated ? "PUT" : 'POST', gameId)
    //     const res = JSON.parse(response)
    //     setBtnLoading(false)


    // }

    return (
        <View style={{ marginHorizontal: 15, paddingBottom: 6, flexDirection: 'row', alignItems: "center" }} >
            <TouchableOpacity style={[styles.iconContainer,]} 
            onPress={() => {setValue(value-1); setScores([...updatedArray, { user: item?.user.id, score:value-1 }])}} >
            <Icon name="minus" size={5} as={Entypo} color={colors.white} />
            </TouchableOpacity>
            <View style={styles.counter} >
                <Text style={styles.text}>{value}</Text>
            </View>
            <TouchableOpacity style={[styles.iconContainer]} 
            onPress={() => {setValue(value+1); setScores([...updatedArray, { user: item?.user.id, score:value+1 }])}} >
                <Icon name="plus" size={5} as={Entypo} color={colors.white} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    iconContainer: {
        backgroundColor: colors.darkGreen,
        height: 25,
        width: 25,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    counter: {
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        paddingVertical: 4,
        justifyContent: 'center',
        alignItems: "center",

    },
    text: {
        fontSize: 16,
        fontWeight: '500',
        fontFamily: fonts.PROXIMA_REGULAR,
        color: colors.grey4
    }
})
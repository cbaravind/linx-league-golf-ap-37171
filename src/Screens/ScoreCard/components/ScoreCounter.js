import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon } from 'native-base'
import Entypo from 'react-native-vector-icons/Entypo'
import { colors, fonts } from '../../../theme'
import { postGameScore } from '../../../../api'
import { useSelector } from 'react-redux'
export default function ScoreCounter({ item, gameId, hole }) {
    const { token, user } = useSelector(state => state.auth?.user)

    const [value, setValue] = useState(0)
    const [btnLoading, setBtnLoading] = useState(false)
    const [scoreUpdated, setScoreUpdated] = useState(false)

    useEffect(() => {
        console.log('hole changed')
        setValue(0)
        setScoreUpdated(false)
    }, [hole])

    const gameScore = async (sign) => {
        setBtnLoading(sign)
        // () =>{value? setValue(value + 1):setValue(1)}
        if (!value && sign == 'minus') return
        const updated = sign == 'plus' ? value + 1 : value - 1
        setValue(updated)
        setScoreUpdated(true)
        const obj = {
            score: updated,
            // putt: putts,
            game: gameId,
            user: item?.user?.id,
            hole: hole
        }
        const response = await postGameScore(obj, token, scoreUpdated ? "PUT" : 'POST',gameId)
        const res = JSON.parse(response)
        setBtnLoading(false)
        // if (res?.results?.length)
            //setAddScoreClicked(false)

            console.log(res, '====res')
        // else {
        //   console.log(res)
        //   console.log(obj)
        //   console.log(item)
        // }
    }
    return (
        <View style={{ marginHorizontal: 15, paddingBottom: 6, flexDirection: 'row', alignItems: "center" }} >
            <TouchableOpacity disabled={btnLoading == 'minus'} style={[styles.iconContainer, btnLoading == 'minus' && { backgroundColor: 'rgba(34, 85, 41,0.5)' }]} onPress={() => gameScore('minus')} >
                <Icon name="minus" size={5} as={Entypo} color={colors.white} />
            </TouchableOpacity>
            <View style={styles.counter} >
                <Text style={styles.text}>{value || 0}</Text>
            </View>
            <TouchableOpacity disabled={btnLoading == 'plus'} style={[styles.iconContainer, btnLoading == 'plus' && { backgroundColor: 'rgba(34, 85, 41,0.5)' }]} onPress={() => gameScore('plus')} >
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
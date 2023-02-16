import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Icon } from 'native-base'
import Entypo from 'react-native-vector-icons/Entypo'
import { colors, fonts } from '../theme'
export default function Counter({ value, setValue }) {
    return (
        <View style={{ marginHorizontal:15,paddingBottom:6}} >
            <TouchableOpacity style={styles.iconContainer} onPress={() => setValue(value + 1)} >
                <Icon name="plus" size={5} as={Entypo} color={colors.white} />
            </TouchableOpacity>
            <View style={styles.counter} >
                <Text style={styles.text}>{value}</Text>
            </View>
            <TouchableOpacity style={styles.iconContainer} onPress={() =>{value >=1 ? setValue(value - 1):null}} >
                <Icon name="minus" size={5}  as={Entypo} color={colors.white} />
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
    counter:{
        backgroundColor:'#fff',
        paddingVertical:12,
        justifyContent:'center',
        alignItems:"center",
      
    },
    text:{
        fontSize:16,
        fontWeight:'500',
        fontFamily:fonts.PROXIMA_REGULAR,
        color:colors.grey4
    }
})
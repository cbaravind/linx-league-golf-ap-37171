import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Row from '../../../Components/Row'
import { colors } from '../../../theme'
export default function RoundCard({item}) {
    return (
        <View style={styles.container}>
            <Row>
                <Row style={{justifyContent: 'flex-start',}}>
                    <View style={styles.numberContainer}>
                        <View style={[styles.numberContainer, { backgroundColor: 'rgba(192,192,192,1)', height: 22, width: 22 }]}>
                            <Text style={styles.text}>1</Text>
                        </View>
                    </View>
                    <View style={{marginLeft:10}}>

                        <Text style={styles.text}>dd/mm/yyyy     8:00 am</Text>
                        <Text style={[styles.text,{fontWeight:'700',fontSize:16}]}>{item.title}</Text>
                    </View>
                </Row>
                <View style={{ flexDirection: "row",marginRight:7 }}>
                    <Image style={[styles.imgStyle,{zIndex:10,position:"absolute",left:-18,bottom:2}]} resizeMode={"contain"} source={require('../../../assets/images/user1.png')} />
                    <Image style={[styles.imgStyle,{ zIndex:-10}]} source={require('../../../assets/images/user2.png')}  resizeMode={"contain"}  />
                </View>
            </Row>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 15,
        paddingBottom:20,
        marginTop:5
    },
    numberContainer: {
        backgroundColor: 'rgba(192,192,192,0.5)',
        height: 32, width: 32,
        borderRadius: 15, alignItems: 'center',
        justifyContent: "center"
    },
    text:{
        fontSize:14,color:colors.text1,
    },
    imgStyle:{
        width: 25, height: 25, borderRadius: 15
    }

})
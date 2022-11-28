import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Row from './Row'
import { colors } from '../theme'
export default function UserProfile({ item }) {
    return (
        <Row style={styles.container}>
            <View style={styles.imgContainer}>
                {item.image ?
                    <Image source={item.image} style={styles.img} />
                    :
                    <></>
                }
            </View>
            <Text>{item.name}</Text>
        </Row>
    )
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
        justifyContent: "flex-start"
    },
    img: {
        height: 37, width: 37,
        borderRadius: 20,
    },
    imgContainer: {
        height: 37, width: 37,
        borderWidth: 1,
        borderColor: colors.green,
        backgroundColor: colors.grey2,
        marginRight: 15,
        borderRadius: 20,

    }
})
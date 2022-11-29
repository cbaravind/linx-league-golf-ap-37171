import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../theme'
import Row from './Row'
import { useNavigation } from '@react-navigation/core'
import { IconButton, Icon, Pressable } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';
import RoutesKey from '../Navigation/routesKey'

export default function AppHeader({ title, rightIcon, showLogo, leftIcon, back }) {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            {showLogo && !title && !rightIcon && !leftIcon ?
                < Image source={require('../assets/images/logoWhite.png')} resizeMode="contain" style={{ width: 150, height: 60, alignSelf: "center" }} />
                :

                <Row>
                    <Row style={{ justifyContent: "flex-start" }}>
                        {leftIcon ?
                            leftIcon
                            :
                            back ?
                                <IconButton onPress={() => navigation.goBack()} icon={<Icon color={colors.white} as={Ionicons} name='chevron-back' />} style={{ marginRight: 10 }} size={30} color={colors.white} />
                                :
                                <></>
                        }
                        {title ?
                            <Text style={styles.title} >{title}</Text>
                            :
                            <></>

                        }
                    </Row>
                    {showLogo ?
                        <Image source={require('../assets/images/logoWhite.png')} resizeMode="contain" style={{ width: 150, height: 60, alignSelf: "center" }} />
                        :
                        <></>
                    }
                    {rightIcon ?
                        rightIcon
                        :
                        <></>
                    }
                </Row>
            }

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // height: 150,
        backgroundColor: colors.grey,
        paddingTop: 55,
        paddingHorizontal: 24,
        justifyContent: "flex-end",
        paddingBottom: 10
    },
    title: {
        color: colors.white,
        fontSize: 14,
        fontWeight: '700'
    }

})
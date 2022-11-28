import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { colors } from '../theme'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Row from './Row'
import { useNavigation } from '@react-navigation/core'
import { IconButton, Icon } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AppHeader({ title, rightIcon, showLogo, showBell,back }) {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Row >
                <Row style={{ justifyContent: "flex-start" }}>
                    {showBell ?
                        <FontAwesome name='bell-o' size={30} color={colors.white} />
                        :
                        back ?
                            <IconButton onPress={() => navigation.goBack()} icon={<Icon color={colors.white} as={Ionicons} name='chevron-back' />} style={{ marginRight: 10 }} size={30} color={colors.white} />
                            :
                            <></>
                    }

                    {!showLogo ?
                        <Text style={styles.title} >{title}</Text>
                        :
                        <></>

                    }
                </Row>
                {showLogo && title != 'Home' ?
                    <Image source={require('../assets/images/logoWhite.png')} resizeMode="contain" style={{ width: 150, height: 60, alignSelf: "center" }} />
                    :
                    <></>
                }
                {rightIcon ?
                    rightIcon
                    : title == 'Home' ?
                        <Row style={{ justifyContent: 'center', alignSelf: 'flex-end' }}>
                            <CommunityIcon name='comment-outline' size={30} color={colors.white} />
                            <Image source={require('../assets/images/profileImg.png')} style={{ width: 30, height: 30, marginLeft: 15 }} />
                        </Row>
                        :
                        <></>
                }
            </Row>
            {showLogo && title == 'Home' ?
                <Image source={require('../assets/images/logoWhite.png')} resizeMode="contain" style={{ width: 150, height: 60, alignSelf: "center" }} />
                :
                <></>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // height: 150,
        backgroundColor: colors.grey,
        paddingTop: 50,
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
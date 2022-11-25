import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { colors } from '../theme'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Row from './Row'
export default function AppHeader({ title, rightIcon, showLogo, showBell }) {
    return (
        <View style={styles.container}>
            <Row >
                {showBell ?
                    <FontAwesome name='bell-o' size={30} color={colors.white} />
                    :
                    <></>
                }
                {/* {showLogo && title != 'Home' ?
                    <Image source={require('../assets/images/logoWhite.png')} resizeMode="contain" style={{ width: 150, height: 60, alignSelf: "center" }} />
                    :
                    <></>
                } */}
                {rightIcon ?
                    rightIcon
                    : title == 'Home' ?
                        <Row style={{ justifyContent: 'center',alignSelf:'flex-end' }}>
                            <Icon name='comment-outline' size={30} color={colors.white} />
                            <Image source={require('../assets/images/profileImg.png')} style={{ width: 30, height: 30, marginLeft: 15 }} />
                        </Row>
                        :
                        <></>
                }
            </Row>
            {showLogo?
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
        paddingTop:50,
        paddingHorizontal: 24,
        justifyContent: "flex-end",
        // paddingBottom:10
    }

})
import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import Container from '../../../Components/Container'
import AppHeader from '../../../Components/AppHeader'
import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../../theme'
import UserProfile from '../../../Components/UserProfile'
import CityInput from '../components/CityInput'
import AppButton from '../../../Components/AppButton'
import Row from '../../../Components/Row'
import AppModal from '../../../Components/AppModal'
import { useNavigation } from '@react-navigation/core'
import { friends } from '../../../assets/data'
import RoutesKey from '../../../Navigation/routesKey'

export default function AddFriends() {
    const [modalVisible, setModalVisible] = useState(false)
    const navigation = useNavigation()


    return (
        <Container >
            <AppHeader back title="Add Friends to your Tee time" rightIcon={<Text style={styles.text}>SKIP</Text>} />
            <View style={{ backgroundColor: colors.background, flex: 1 }} >
                <CityInput />
                <FlatList
                    data={friends}
                
                    contentContainerStyle={{
                        backgroundColor: colors.white,
                        padding: 20,
                        marginTop: 30,
                        marginBottom: 12
                    }}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <UserProfile item={item} />}
                />
                {/* <View>
                <Text style={[styles.text, { fontWeight: '400', color: colors.text1, fontSize: 14 }]}>Remove players by swiping left</Text>
                </View> */}
                <View style={styles.bottom} >
                    <Row style={{ marginBottom: 15 }} >
                        <AppButton
                            style={{ flex: 1 }}
                            onPress={() => setModalVisible('find')}
                            label={"FIND FRIENDS"} />
                        <View style={{ width: 20 }} />
                        <AppButton style={styles.button} 
                            onPress={() => setModalVisible('refer')}
                            labelStyle={{ color: colors.darkGreen }}
                            label={"SEND REFERRAL"} />
                    </Row>
                    <Text style={styles.desc}>Earn <Text style={{ color: colors.green, fontWeight: '700' }}>free seasons</Text> and more
                        {"\n"} by referring your friends to Linx League</Text>
                </View>
            </View>
            {modalVisible ?
                <AppModal
                    onClose={() => setModalVisible(false)}
                    onPress={() => { setModalVisible(false);navigation.navigate(modalVisible=='find'? RoutesKey.FINDFRIENDS:RoutesKey.SENDREFERRAL) }}
                    heading={'Golf is better with Friends'}
                    desc={'and to be able to find friends Linx needs access to your phone contacts'} />
                :
                <></>
            }
        </Container>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: colors.white,
        // fontFamily: fonts.PROXIMA_BOLD,
        fontWeight: '700',
    },
    button: {
        backgroundColor: colors.background,
        borderWidth: 1,
        borderColor: colors.darkGreen,
        flex: 1
    },
    desc: {
        fontSize: 14,
        // fontFamily: fonts.PROXIMA_REGULAR,
        textAlign: 'center',
        fontWeight: '400'
    },
    bottom: {
        // position: "absolute", 
        // bottom: 10,
        padding: 15,
        paddingBottom:25
        //  flex: 1
    }
})
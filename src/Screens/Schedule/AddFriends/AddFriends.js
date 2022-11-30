import { View, Text, FlatList, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { colors, fonts } from '../../../theme'
import { SwipeListView } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/Ionicons'

import Container from '../../../Components/Container'
import AppHeader from '../../../Components/AppHeader'
import UserProfile from '../../../Components/UserProfile'
import CityInput from '../components/CityInput'
import AppButton from '../../../Components/AppButton'
import Row from '../../../Components/Row'
import AppModal from '../../../Components/AppModal'
import { friends } from '../../../assets/data'
import RoutesKey from '../../../Navigation/routesKey'
import Contacts from 'react-native-contacts'
import { PermissionsAndroid } from 'react-native';

export default function AddFriends() {
    const [modalVisible, setModalVisible] = useState(false)
    const [friendsList, setFriendsList] = useState(friends)
    const navigation = useNavigation()

    const fetchContacts = () => {
        if(modalVisible=='refer'){

        
        Contacts.checkPermission().then(permission => {
            // Contacts.PERMISSION_AUTHORIZED || Contacts.PERMISSION_UNDEFINED || Contacts.PERMISSION_DENIED
            console.log('permission', permission)
            if (permission === 'undefined') {
                Contacts.requestPermission().then(permission => {
                    // ...
                })
            }
            if (permission === 'authorized') {
                // yay!
                Contacts.getAll().then(contacts => {
                    setModalVisible(false);
                    if(contacts.length){

                        navigation.navigate( RoutesKey.SENDREFERRAL,{contacts:contacts})
                    }

                    console.log(contacts)
                })
            }
            if (permission === 'denied') {
                // x.x
            }
        })
    }else{
        setModalVisible(false);
        navigation.navigate( RoutesKey.FINDFRIENDS )
    }
    }
    return (
        <Container >
            <AppHeader back title="Add Friends to your Tee time" rightIcon={<Text style={styles.text}>SKIP</Text>} />
            <View style={{ backgroundColor: colors.background, flex: 1 }} >
                <CityInput />
                <View
                    style={{
                        backgroundColor: colors.white,
                        marginTop: 30,
                        marginBottom: 12,

                    }}>
                    <SwipeListView
                        style={{
                            paddingTop: 20,
                            paddingLeft: 20,
                        }}
                        data={friendsList}
                        keyExtractor={(item) => item.id}
                        renderItem={(data, rowMap) => (
                            <UserProfile
                            name={data.item.name}
                            image={data.item.image}
                                // item={}
                                 />
                        )}
                        renderHiddenItem={(data, rowMap) => (
                            <TouchableHighlight onPress={() => setFriendsList(friendsList.filter(e => data.item.id != e.id))} style={styles.rowBack}>
                                <Icon name="trash-outline" size={25} color={colors.white} />

                            </TouchableHighlight>
                        )}
                        leftOpenValue={0}
                        rightOpenValue={-75}
                    />

                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={[styles.text, { fontWeight: '400', color: colors.text1, fontSize: 14 }]}>Remove players by swiping left</Text>
                </View>
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
                    button
                    onClose={() => setModalVisible(false)}
                    onPress={() => fetchContacts()}
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

        flex: 1,
        padding: 15,
        paddingBottom: 25,
        justifyContent: 'flex-end'
    },
    rowBack: {
        backgroundColor: colors.pink,
        paddingLeft: 20,
        paddingRight: 20,
        paddingVertical: 15, alignSelf: "flex-end"
    }
})
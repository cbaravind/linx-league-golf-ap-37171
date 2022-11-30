import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import Container from '../../../Components/Container'
import AppHeader from '../../../Components/AppHeader'
import { friends } from '../../../assets/data'
import UserProfile from '../../../Components/UserProfile'
import {colors} from '../../../theme'
import AppButton from '../../../Components/AppButton'
import { useNavigation } from '@react-navigation/core'
import SearchInput from '../components/SearchInput'
export default function FindFriends() {
    const navigation=useNavigation()
    return (
        <Container>
            <AppHeader back title="Search Friends"  />
            <View style={{ backgroundColor: colors.background,flex:1  }} >
            <SearchInput/>
                <FlatList
                    data={friends}
                    contentContainerStyle={{ backgroundColor: colors.white, padding: 20, marginTop: 20, marginBottom: 12 }}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <UserProfile name={item.name} image={item.image} />}
                />
                <AppButton  label='Request' style={{margin:25}} />
            </View>
           
        </Container>
    )
}
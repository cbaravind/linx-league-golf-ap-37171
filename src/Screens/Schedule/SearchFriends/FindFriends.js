import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import Container from '../../../Components/Container'
import AppHeader from '../../../Components/AppHeader'
import { friends } from '../../../assets/data'
import UserProfile from '../../../Components/UserProfile'
import { colors } from '../../../theme'
import AppButton from '../../../Components/AppButton'
import { useNavigation } from '@react-navigation/core'
import SearchInput from '../components/SearchInput'
import { Button } from 'native-base'
export default function FindFriends() {
    const navigation = useNavigation()
    const [friendsArray, setFriendsArray] = useState(friends)

    const searchFriends = (searchText) => {
        if (searchText.length && friends.length) {
            const filtered = friendsArray.filter(e => e.name.includes(searchText))
            setFriendsArray(filtered)
        }
    }
    
    const clearResults = () => {
        setFriendsArray(friends)
    }
    return (
        <Container>
            <AppHeader back title="Search Friends" />
            <View style={{ backgroundColor: colors.background, flex: 1 }} >
                <SearchInput onSearchSubmit={searchFriends} clearResults={clearResults} />
                <FlatList
                    data={friendsArray}
                    contentContainerStyle={{ backgroundColor: colors.white, padding: 20, marginTop: 20, marginBottom: 12 }}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <UserProfile name={item.name} image={item.image} />}
                />
                <Button m={'7'} shadow={5} bg='#7D9E49'>{"Request"}</Button>

                {/* <AppButton label='Request' style={{}} /> */}
            </View>

        </Container>
    )
}
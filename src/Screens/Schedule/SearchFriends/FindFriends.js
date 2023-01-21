import { View, Text, FlatList, ActivityIndicator } from "react-native"
import React, { useEffect, useState } from "react"
import Container from "../../../Components/Container"
import AppHeader from "../../../Components/AppHeader"
import { friends } from "../../../assets/data"
import UserProfile from "../../../Components/UserProfile"
import { colors } from "../../../theme"
import AppButton from "../../../Components/AppButton"
import { useNavigation } from "@react-navigation/core"
import SearchInput from "../../../Components/SearchInput"
import { Button } from "native-base"
import { getAllUsers, makeFriends } from "../../../../api"
import { useSelector } from "react-redux"
import { showMessage } from "react-native-flash-message"

export default function FindFriends({ route }) {
  
  const contacts        = route?.params?.contacts
  const navigation      = useNavigation()
  const { user, token } = useSelector(state => state.auth?.user)

  const [friendsArray, setFriendsArray] = useState([])
  const [knownUsers, setKnownUsers] = useState(false)
  const [loading, setLoading]       = useState(false)
  const [selected, setSelected]     = useState([])
  const [btnLoading, setbtnLoading] = useState(false)

  const searchFriends = searchText => {
    if (searchText.length && friends.length) {
      const filtered = friendsArray.filter(e => e.user?.name.includes(searchText))
      setFriendsArray(filtered)
    }
  }

  useEffect(() => {
    getUsersList()
  }, [])

  const getUsersList = async () => {
    setLoading(true)
    const response = await getAllUsers(token)
    const res = JSON.parse(response)
    if (res.count) {
      setFriendsArray(res.results)
      let friends = []
      contacts?.map(((item) => {
        const number = item.phoneNumbers.length ? item.phoneNumbers[0]['number'] : 0
        const filtered = res.results.filter(e => e.phone_number == number)
        if (filtered.length) {
          friends = [...friends, ...filtered]
        }
      }))
      setKnownUsers(friends)
      setFriendsArray(friends)
    }
    setLoading(false)
  }

  const requestHandler = async () => {
    setbtnLoading(true)
    const filteredData = selected.map((item) => (item.user?.id))
    const response = await makeFriends(user?.user?.id,filteredData, token)
    const res = JSON.parse(response)
    setbtnLoading(false)
    if(res.id){
      navigation.goBack()
    }else {
      if(res.detail){
        showMessage({
          type:'warning',
          message:res.detail
        })
      }
    }
  }

  const clearResults = () => {
    setFriendsArray(knownUsers)
  }
  return (
    <Container>
      <AppHeader back title="Search Friends" />
      <View style={{ backgroundColor: colors.background, flex: 1 }}>
        <SearchInput
          onSearchSubmit={searchFriends}
          clearResults={clearResults}
        />
        {loading ?
          <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <ActivityIndicator color={colors.green} />
          </View>
          :
          friendsArray.length ?

            <FlatList
              data={friendsArray}
              contentContainerStyle={{
                backgroundColor: colors.white,
                padding: 20,
                marginTop: 20,
                marginBottom: 12
              }}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <UserProfile 
                name={item?.user?.name} 
                selected={selected.includes(item)} 
                onPress={() => { selected.includes(item) ? setSelected(selected.filter(e => e.id != item.id)) : setSelected([...selected, item]) }} 
                image={item.profile_image} />
              )}
            />
            :
            <View style={{ alignItems: "center", flex: 1, justifyContent: 'center' }} >
              <Text>No Records found</Text>
            </View>
        }
        <Button isLoading={btnLoading} onPress={requestHandler} m={"7"} shadow={5} bg="#7D9E49">
          {"Request"}
        </Button>

        {/* <AppButton label='Request' style={{}} /> */}
      </View>
    </Container>
  )
}

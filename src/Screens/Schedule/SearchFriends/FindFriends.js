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
import { getAllUsers } from "../../../../api"
import { useSelector } from "react-redux"
export default function FindFriends({route}) {
  const contacts = route?.params?.contacts

  const navigation = useNavigation()
  const [friendsArray, setFriendsArray] = useState([])
  const [loading, setLoading] = useState(false)
  const { user, token } = useSelector(state => state.auth?.user)
  const searchFriends = searchText => {
    if (searchText.length && friends.length) {
      const filtered = friendsArray.filter(e => e.name.includes(searchText))
      setFriendsArray(filtered)
    }

  }

  useEffect( () => {
    getUsersList()
  }, [])

const getUsersList= async () => {
  setLoading(true)
  const response = await getAllUsers(token)
  const res = JSON.parse(response)
  if (res.count) {
    setFriendsArray(res.results)
    const friendsArray=[]
    contacts?.map(((item)=>{
      console.log(item,'=====')
      // res.results.filter(e=>e.phone_number==item.phone_number)
    }))
  }
  setLoading(false)
}

  const clearResults = () => {
    setFriendsArray(friends)
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
          <View style={{alignItems:'center',justifyContent: 'center',flex:1}}>
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
                <UserProfile name={item?.user?.name} image={item.profile_image} />
              )}
            />
            :
            <View style={{ alignItems: "center", flex: 1, justifyContent: 'center' }} >
              <Text>No Records found</Text>
            </View>
        }
        <Button m={"7"} shadow={5} bg="#7D9E49">
          {"Request"}
        </Button>

        {/* <AppButton label='Request' style={{}} /> */}
      </View>
    </Container>
  )
}
